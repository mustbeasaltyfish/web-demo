# 黔路兴农 · 网站项目

一个基于 React + Vite 打造的单页应用，集成 Tailwind CSS 与 shadcn/ui 组件库，用于展示“黔路兴农 · 青智赋能”社会实践团队的介绍。项目已准备好在本地开发、构建，并通过 GitHub Pages 自动部署。

## 技术栈
- React 19、TypeScript、Vite 7
- Tailwind CSS 3.4、shadcn/ui 风格基础组件
- Framer Motion 动画、Lucide 图标库

## 开始之前
1. 请确保已安装 Node.js ≥ 20（可使用 `node -v` 查看）。
2. 安装依赖：
   ```bash
   npm install
   ```

## 本地开发
```bash
npm run dev
```
启动后访问终端输出的本地地址（默认 http://localhost:5173）。

## 构建产物
```bash
npm run build
```
构建成功后会生成 `dist/` 文件夹，可用于静态托管或本地预览：
```bash
npm run preview
```

## GitHub Pages 自动部署
仓库已经包含 `.github/workflows/deploy.yml`，在默认分支 `main` 有变更时会自动：
1. 安装依赖并构建项目；
2. 自动推送 `dist/` 到 GitHub Pages；
3. 在 Actions 界面给出访问链接。

> 如果仓库名为 `username.github.io`（用户/组织主页仓库），工作流会自动将 `BASE_PATH` 设为 `/`；否则会使用 `/${repo-name}/`，确保页面静态资源路径正确。

首次启用前，请在 GitHub 仓库中打开 **Settings → Pages**，将 *Source* 设为 “GitHub Actions”。

## 常见自定义
- **品牌信息**：修改 `src/PracticeSite.tsx` 中的宣传文案、数据、配图等。
- **色彩与主题**：可以在 `src/index.css` 中调整 CSS 变量（如 `--background`、`--primary`）。
- **新组件/样式**：在 `src/components/ui` 中可继续扩展更多 shadcn 风格组件。

## 目录速览
```
web/
├── public/              # 静态资源
├── src/
│   ├── components/ui/   # 基础 UI 组件（Button、Card 等）
│   ├── lib/             # 工具方法（cn）
│   ├── PracticeSite.tsx # 站点主体页面
│   ├── App.tsx          # 应用入口，渲染 PracticeSite
│   └── main.tsx         # Vite 挂载入口
└── .github/workflows/   # GitHub Pages 部署工作流
```

## 后续拓展建议
- 接入实际的表单收集服务（如 Formspree、naive form backend 等），替换示例表单。
- 补充 SEO 信息（`index.html` 中的 `<title>`、`<meta>` 标签等）。
- 按需拆分动画逻辑，并补充单元测试或视觉回归测试。

祝项目发布顺利，欢迎继续拓展更多实践内容！
