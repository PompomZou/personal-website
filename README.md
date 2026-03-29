# 个人网站（可本地运行与部署说明）

快速说明：本项目已移除对阿里内网 devServer 限制，并将头像改为本地占位文件，构建时会把 `public/` 复制到 `dist/`。

安装与本地开发：

```bash
npm install
npm run dev
# 在本机或局域网内其他设备访问：http://localhost:3000 或 http://<your-machine-ip>:3000
```

生产构建与本地预览：

```bash
npm run build
# 使用简单静态服务器预览（任选其一）
# 使用 serve（若未安装，npx 会临时运行）：
npx serve dist
# 或使用 Python 简易服务器：
python3 -m http.server 8000 -d dist
# 然后访问 http://localhost:5000 或 http://localhost:8000 视具体命令而定
```

替换头像：把你的头像文件放到 `public/avatar.svg`（或 `public/avatar.jpg/png`），保持文件名 `avatar.*`，构建时会被包含进 `dist/`。

自动下载你的 GitHub 头像（可选）：

如果你希望直接把你的 GitHub 头像替换 `public/avatar.*`，可以运行（示例使用你的用户名）：

```bash
# 使用 curl（推荐）
curl -L -o public/avatar.jpg 'https://avatars.githubusercontent.com/u/132963910?v=4'

# 或使用我们提供的 node 脚本（需要 node 已安装）
node scripts/download-avatar.js 'https://avatars.githubusercontent.com/u/132963910?v=4' public/avatar.jpg
```

注意：我无法直接访问或修改你 GitHub 上的仓库；上面命令会在本地把头像写入 `public/`，然后你可以提交并推送到你的仓库。

部署建议：
- GitHub Pages / Netlify / Vercel：将 `dist/` 目录上传为静态站点即可。
- 若使用 Netlify，可把构建命令设为 `npm run build`，发布目录设为 `dist`。

注意：项目内容（职业经历、公司名）为公开信息，保留或编辑由你决定。若需要我把 unsplash 图像也改为本地占位图片，我可以继续替换。