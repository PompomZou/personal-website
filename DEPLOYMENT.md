# 个人作品集网站部署指南

## 概述
这是一个基于React + TypeScript + Tailwind CSS的个人作品集网站，支持中英双语切换和深色模式。

## 部署方案

### 方案一：Netlify（推荐）
1. 访问 [Netlify](https://www.netlify.com/)
2. 注册账号并连接GitHub
3. 选择你的仓库
4. 构建设置会自动读取 `netlify.toml` 配置
5. 点击部署即可

**优势：**
- 免费额度充足
- 自动HTTPS
- 全球CDN
- 支持自定义域名

### 方案二：Vercel
1. 访问 [Vercel](https://vercel.com/)
2. 使用GitHub账号登录
3. 导入项目
4. 自动读取 `vercel.json` 配置
5. 一键部署

**优势：**
- 部署速度快
- 自动预览分支
- 边缘计算支持

### 方案三：GitHub Pages
1. 在GitHub仓库设置中启用Pages
2. 选择GitHub Actions作为源
3. 推送代码到main分支
4. 自动触发部署流程

**优势：**
- 完全免费
- 与GitHub深度集成
- 自动化部署

### 方案四：传统服务器
如果你有自己的服务器：

```bash
# 构建项目
npm run build

# 将dist目录上传到服务器
# 配置nginx或apache指向dist目录
```

## 本地构建测试
```bash
# 安装依赖
npm install

# 构建生产版本
npm run build

# 预览构建结果（可选）
npx serve dist
```

## 注意事项
1. 确保所有资源路径使用相对路径
2. 项目已配置支持单页应用路由
3. 构建产物在 `dist` 目录
4. 支持现代浏览器（ES2015+）

## 自定义域名
部署完成后，可以在各平台设置自定义域名：
- Netlify: Domain settings → Add custom domain
- Vercel: Project settings → Domains
- GitHub Pages: Repository settings → Pages → Custom domain

## 环境变量
如需配置环境变量，请在各平台的设置中添加：
- `NODE_ENV=production`（通常自动设置）

## 技术栈
- React 18
- TypeScript
- Tailwind CSS
- Webpack 5
- Lucide React Icons