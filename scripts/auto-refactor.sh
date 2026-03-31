#!/usr/bin/env bash
set -euo pipefail

# 自动化重构（非破坏性，使用 git mv）
# 说明：脚本会：
# 1. 创建分支 refactor/auto-structure
# 2. 创建建议目录
# 3. 根据规则把 src/components 下文件分类移动到 src/components/ui 或 src/components/sections
# 4. 把 public/projects & public/testimonials 移到 public/assets/...
# 5. 尝试在 webpack.config.js 中新增 resolve.alias（别名设置）
# 6. git add/commit 提交本地分支（不推远程）
# 7. 运行 npm run typecheck 检查

ROOT="$(pwd)"
echo "Working dir: $ROOT"

# 0. 检查 git 干净状态（非绝对要求，但推荐）
if [ -n "$(git status --porcelain)" ]; then
  echo "警告：当前工作区有未提交的更改。建议先提交或 stash。"
  echo "git status --porcelain output:"
  git status --porcelain
  read -p "是否继续？输入 y 继续，其他取消: " confirm
  if [ "$confirm" != "y" ]; then
    echo "已取消"
    exit 1
  fi
fi

# 1. 创建分支
git checkout -b refactor/auto-structure

# 2. 创建目标目录
mkdir -p public/assets/images public/assets/projects public/assets/testimonials
mkdir -p src/assets/images src/assets/svgs
mkdir -p src/components/ui src/components/layout src/components/sections
mkdir -p src/pages src/contexts src/hooks src/data src/locales src/styles src/types src/utils

# 3. Move public resources (if exist)
if [ -d public/projects ]; then
  git mv public/projects public/assets/projects || true
fi
if [ -d public/testimonials ]; then
  git mv public/testimonials public/assets/testimonials || true
fi
# keep avatar at public/avatar.svg (do not rename)

# 4. Move component files based on simple rules
# define a list of known UI component names (common small components)
UI_LIST=("Badge" "Button" "Card" "SectionTitle")

# Move files directly under src/components/ (not in sections/ui) to either ui or sections
for f in src/components/*.tsx src/components/*.ts; do
  [ -e "$f" ] || continue
  name=$(basename "$f")
  base="${name%%.*}"
  moved=0
  for u in "${UI_LIST[@]}"; do
    if [ "$base" = "$u" ]; then
      echo "Moving UI $f -> src/components/ui/$name"
      git mv "$f" "src/components/ui/$name" || true
      moved=1
      break
    fi
  done
  if [ "$moved" -eq 0 ]; then
    # don't move index.ts or anything already in sections
    if [ "$base" != "index" ]; then
      echo "Moving section candidate $f -> src/components/sections/$name"
      git mv "$f" "src/components/sections/$name" || true
    fi
  fi
done

# Also ensure files already in src/components/sections remain (no-op)
# Also move any top-level individual components (Hero, Testimonials) if present
for name in Hero Testimonials Navigation Portfolio RecentWork About Contact Services Experience Education Honors Philosophy ProductPhilosophy; do
  srcfile="src/components/${name}.tsx"
  if [ -f "$srcfile" ]; then
    echo "Moving $srcfile -> src/components/sections/${name}.tsx"
    git mv "$srcfile" "src/components/sections/${name}.tsx" || true
  fi
done

# 5. Move data/locales if they are not already in src/data or src/locales
if [ -d data ]; then
  git mv data src/data || true
fi
if [ -d locales ]; then
  git mv locales src/locales || true
fi

# 6. Update webpack.config.js: add resolve.alias if not present
WPKG="webpack.config.js"
if grep -q "resolve:" "$WPKG"; then
  echo "Updating $WPKG to add aliases (components/ui/sections/pages) if missing..."
  if ! grep -q "aliases_for_refactor_auto_structure" "$WPKG"; then
    node -e "
const fs=require('fs');
const path=require('path');
const p=path.resolve('$WPKG');
let s=fs.readFileSync(p,'utf8');
if(s.indexOf('aliases_for_refactor_auto_structure')===-1){
  s = s.replace(/resolve:\s*\{([\s\S]*?)\n\s*\}/m, (match) => {
    if(match.indexOf('alias')===-1){
      return match.replace(/\n\s*\}/, '\n  ,alias: {\\n    components: require("path").resolve(__dirname, "src/components"),\\n    ui: require("path").resolve(__dirname, "src/components/ui"),\\n    sections: require("path").resolve(__dirname, "src/components/sections"),\\n    pages: require("path").resolve(__dirname, "src/pages")\\n  }\\n}');
    }
    return match;
  });
  s = s.replace('resolve: {', 'resolve: { /* aliases_for_refactor_auto_structure */');
  fs.writeFileSync(p,s,'utf8');
  console.log('patched',p);
} else {
  console.log('aliases already present');
}
"
  else
    echo "alias marker already present, skipping patch"
  fi
else
  echo "Could not find resolve: in $WPKG; please add aliases manually later."
fi

# 7. Stage & commit
git add -A
git commit -m "chore(refactor): auto-structure - move files into components/ui and components/sections, assets to public/assets" || echo "no changes to commit"

# 8. Try typecheck to surface path errors
echo "Running typecheck (npm run typecheck) to detect import path issues..."
if command -v npm >/dev/null 2>&1; then
  npm run typecheck || echo 'typecheck failed - there may be import errors to fix in VS Code'
else
  echo "npm not found, skip typecheck"
fi

echo "Done. Please open project in VS Code. With settings 'typescript.updateImportsOnFileMove.enabled': 'always' VS Code can help update many imports automatically. Some manual fixes may be required."
