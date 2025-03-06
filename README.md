# 徐晓龙的个人博客

一个简约现代的个人博客系统，无需登录即可浏览文章内容，专注于提供良好的阅读体验。

## 项目特点

- 💎 简约现代的UI设计
- 📱 完全响应式布局，适配各种设备
- ⚡ 基于Next.js，提供极佳的性能体验
- 🔍 SEO友好，提升搜索引擎可见性
- 📝 Markdown支持，轻松编写技术内容
- 🔒 安全的后台管理，仅博主可访问

## 技术栈

- **前端框架**：Next.js (React)
- **样式解决方案**：TailwindCSS
- **内容管理**：Markdown
- **数据存储**：JSON文件 (可迁移至MongoDB)
- **部署方案**：Vercel

## 项目结构

```
/
├── docs/                   # 项目文档
│   ├── requirements.md     # 需求文档
│   ├── project_overview.md # 项目概述
│   ├── ui_design.md        # UI设计文档
│   └── data_model.md       # 数据模型设计
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # React组件
│   ├── lib/                # 工具函数
│   ├── styles/             # 全局样式
│   └── types/              # TypeScript类型定义
├── public/                 # 静态资源
└── data/                   # 数据存储目录
```

## 功能模块

### 前台功能
- 博客文章列表
- 文章详情页
- 分类浏览
- 搜索功能
- 关于页面

### 后台功能
- 登录验证
- 文章管理
- 分类管理
- 个人信息设置

## 开发与部署

### 本地开发
```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev
```

### 构建与部署
```bash
# 构建项目
npm run build

# 启动生产服务器
npm start
```

## 项目文档

详细的项目需求和规格说明，请查看[需求文档](./docs/requirements.md)。

## 联系方式

- 作者：徐晓龙
- 邮箱：[your-email@example.com]

## 许可证

本项目采用 MIT 许可证 