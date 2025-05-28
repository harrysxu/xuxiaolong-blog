# 徐晓龙个人博客系统 - 知识库

## 目录
- [前端开发](#前端开发)
- [后端开发](#后端开发)
- [数据库](#数据库)
- [部署与运维](#部署与运维)
- [开发工具](#开发工具)
- [问题解决](#问题解决)
- [最佳实践](#最佳实践)
- [设计决策记录](#设计决策记录)

## 前端开发

### KB001: Next.js 14的App Router基础结构
- **背景**：项目使用Next.js 14，采用新的App Router架构
- **要点**：
  - App Router使用目录结构定义路由，每个路由目录需包含page.tsx
  - layout.tsx用于定义共享布局
  - loading.tsx用于定义加载状态
  - error.tsx用于错误处理
- **示例**：
```
app/
├── page.tsx           # 首页
├── layout.tsx         # 根布局
├── article/
│   ├── page.tsx       # 文章列表页
│   ├── [slug]/
│   │   └── page.tsx   # 文章详情页
├── admin/
│   ├── page.tsx       # 管理后台首页
│   ├── layout.tsx     # 管理后台布局
```
- **参考资料**：[Next.js App Router文档](https://nextjs.org/docs/app)
- **记录日期**：YYYY-MM-DD

### KB002: TailwindCSS配置与主题定制
- **背景**：需要根据项目设计规范定制TailwindCSS
- **要点**：
  - 在tailwind.config.js中扩展主题颜色和字体
  - 使用@apply指令创建可复用的组件样式
  - 使用响应式前缀适配不同设备
- **示例**：
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      },
      fontFamily: {
        sans: ['思源黑体', 'sans-serif'],
        serif: ['思源宋体', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```
- **参考资料**：[TailwindCSS主题配置](https://tailwindcss.com/docs/theme)
- **记录日期**：YYYY-MM-DD

## 后端开发

### KB003: Next.js API Routes最佳实践
- **背景**：使用Next.js API Routes实现后端API
- **要点**：
  - 统一错误处理和响应格式
  - 请求验证和数据清洗
  - 中间件使用方式
- **示例代码**：待添加
- **记录日期**：YYYY-MM-DD

## 数据库

### KB004: JSON文件作为数据存储的实现方式
- **背景**：项目初期使用JSON文件存储数据
- **要点**：待添加
- **示例代码**：待添加
- **记录日期**：YYYY-MM-DD

## 部署与运维

### KB005: Vercel部署流程与注意事项
- **背景**：项目计划部署到Vercel平台
- **要点**：待添加
- **记录日期**：YYYY-MM-DD

## 开发工具

### KB007: Cursor背景代理环境配置
- **背景**：配置Cursor编辑器的背景代理功能，实现异步开发任务处理
- **要点**：
  - 背景代理是预览功能，需要关闭隐私模式
  - 需要GitHub仓库读写权限
  - 通过`.cursor/environment.json`配置环境
  - 使用安装脚本自动化依赖管理
- **配置文件结构**：
```json
{
  "user": "ubuntu",
  "install": "./.cursor/install.sh",
  "start": "echo 'Starting development environment...'",
  "terminals": [
    {
      "name": "dev-server",
      "command": "npm run dev",
      "description": "启动Next.js开发服务器"
    }
  ]
}
```
- **使用方法**：
  - `Cmd + '` 打开背景代理列表
  - `Cmd + ;` 查看代理状态
- **适用场景**：
  - 大型功能开发
  - 并行任务处理
  - 自动化测试和构建
- **参考资料**：[Cursor背景代理文档](https://docs.cursor.com/background-agent)
- **记录日期**：2024-05-28

## 问题解决

<!-- 在此记录项目中遇到的问题及解决方案 -->

## 最佳实践

### KB006: React组件设计原则
- **背景**：制定项目的React组件设计规范
- **要点**：
  - 组件职责单一
  - 属性类型明确定义
  - 状态管理策略
  - 错误边界处理
- **示例代码**：待添加
- **记录日期**：YYYY-MM-DD

## 设计决策记录

### DR001: 状态管理策略选择
- **背景**: 需要选择合适的状态管理方案
- **日期**: 2023-XX-XX
- **决策者**: 徐晓龙
- **问题陈述**: 
  项目需要跨组件共享状态数据，有多种选择：React Context、Redux、Zustand等
  
- **考虑的选项**:
  1. **React Context + useReducer**: 
     - 优点: 原生支持，无需额外依赖
     - 缺点: 大型应用可能导致过度渲染
     
  2. **Redux + RTK**: 
     - 优点: 成熟稳定，工具支持好
     - 缺点: 配置繁琐，学习曲线陡峭
     
  3. **Zustand**:
     - 优点: 轻量级，API简单
     - 缺点: 社区相对较小

- **决策**: 选择Zustand，原因:
  1. 项目规模中等，不需要Redux的全部功能
  2. 需要比Context更好的性能和简单的API
  3. 与Next.js集成良好

- **实施计划**:
  1. 安装zustand包
  2. 创建专门的store目录
  3. 按功能模块分离store

- **评估指标**:
  六周后评估此决策是否合适，根据开发体验和性能表现

### DR002: 项目目录结构设计
- **背景**: 需要确定项目的目录组织方式
- **日期**: 2023-XX-XX
- **决策者**: 徐晓龙
- **问题陈述**: 
  Next.js 14引入了App Router，需要决定如何组织项目结构以保持代码整洁和可维护
  
- **考虑的选项**:
  1. **按功能模块划分**:
     - 优点: 相关代码放在一起，便于开发单个功能
     - 缺点: 当应用变大时，模块边界可能变得模糊
     
  2. **按技术关注点划分** (components, hooks, utils等):
     - 优点: 分类清晰，容易找到特定类型的代码
     - 缺点: 相关功能代码分散在不同目录
     
  3. **混合方式**:
     - 优点: 结合两种方式的优点
     - 缺点: 需要明确的规则，否则可能导致混乱

- **决策**: 选择混合方式，规则如下:
  1. 路由页面结构遵循App Router约定
  2. 全局共享组件放在/components目录
  3. 页面特定组件放在对应的路由目录下
  4. 按功能模块组织状态和业务逻辑

- **实施计划**:
  1. 创建初始目录结构
  2. 编写目录组织指南文档
  3. 在前几个组件开发中测试结构的可用性

- **评估指标**:
  开始前台功能开发后评估目录结构的实用性和清晰度 