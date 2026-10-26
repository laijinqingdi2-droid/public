# Selected Work — 项目档案

一个零构建依赖的静态项目作品集。使用原生 HTML、CSS、JavaScript，可直接用 GitHub Pages 发布，不需要服务器或安装依赖。

## 本地预览

直接打开 `index.html` 即可；也可以在项目根目录运行 `python -m http.server 8000`，访问 `http://localhost:8000`。

## 更新项目

编辑 `app.js` 顶部的 `projects` 数组。每个项目包含名称、类别、年份、封面图、简介、角色、周期、成果、标签、项目故事和关键工作。复制一个对象即可增加项目，移除对象即可删除项目。封面图可使用公开图片 URL，也可以将图片放入仓库后引用相对路径。

## 发布到 GitHub Pages

1. 将本目录内容推送到 GitHub 仓库的 `main` 分支。
2. 在仓库 Settings → Pages 中，将 Source 设为 **GitHub Actions**。
3. 仓库会通过 `.github/workflows/pages.yml` 自动部署。每次推送到 `main` 后都会更新网站。

首次部署后可在 Pages 设置页查看公开访问地址。该站点仅使用静态文件，支持仓库路径子目录部署。
