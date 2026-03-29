#!/usr/bin/env bash
set -euo pipefail

# push-and-deploy.sh
# 一键将当前改动提交并推送到 GitHub 仓库 PompomZou/personal-website
# 使用前请确认已在本机配置好 Git 与 GitHub 权限（SSH key 或 HTTPS PAT）

REPO_SSH="git@github.com:PompomZou/personal-website.git"
REPO_HTTPS="https://github.com/PompomZou/personal-website.git"

# 工作目录为脚本所在目录（项目根）
cd "$(dirname "$0")"

echo "当前工作目录: $(pwd)"

# 可选：下载 GitHub 头像为 public/avatar.jpg（取消注释以启用）
# echo "Downloading GitHub avatar..."
# curl -L -o public/avatar.jpg 'https://avatars.githubusercontent.com/u/132963910?v=4' || true

# 初始化 git 仓库（如果尚未初始化）
if [ ! -d .git ]; then
  echo "初始化 git 仓库..."
  git init
fi

# 设置 remote origin（如已存在则检查并提示）
if git remote get-url origin >/dev/null 2>&1; then
  CURRENT_URL=$(git remote get-url origin)
  echo "已存在远程 origin: $CURRENT_URL"
else
  echo "添加远程 origin: $REPO_SSH"
  git remote add origin "$REPO_SSH" || git remote add origin "$REPO_HTTPS"
fi

# 切换或创建 main 分支
git fetch origin --prune || true
git checkout -B main

# 显示状态并确认
echo "Git 状态："
git status --porcelain

echo "将添加并提交所有改动。请确保没有敏感文件需要排除（修改 .gitignore）。"

# 添加并提交（仅在存在改动时提交）
git add .
if git diff --staged --quiet; then
  echo "没有要提交的变更。"
else
  git commit -m "Make site public: replace external assets, add GitHub Pages workflow"
fi

# 推送并设置上游
echo "推送到远程仓库 origin main..."
git push -u origin main

echo "推送完成。请在 GitHub 仓库的 Actions 面板查看工作流运行状态。"

echo "本地快速验证（可选）：\n  npm ci && npm run dev  => 在 http://localhost:3000 查看开发服务器\n  或 npm run build && npx serve dist 来本地预览生产包"
