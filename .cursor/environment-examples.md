# Cursor 背景代理 terminals 配置示例

## 1. 最小配置（无 terminals）
```json
{
  "user": "ubuntu",
  "install": "./.cursor/install.sh"
}
```
**效果**：代理只能执行临时命令，无法维持长期运行的服务

## 2. 单个 terminal 配置
```json
{
  "user": "ubuntu", 
  "install": "./.cursor/install.sh",
  "terminals": [
    {
      "name": "dev",
      "command": "npm run dev",
      "description": "启动开发服务器"
    }
  ]
}
```
**效果**：只运行开发服务器，适合简单项目

## 3. 完整开发环境配置（推荐）
```json
{
  "user": "ubuntu",
  "install": "./.cursor/install.sh", 
  "terminals": [
    {
      "name": "dev-server",
      "command": "npm run dev",
      "description": "启动Next.js开发服务器"
    },
    {
      "name": "type-check",
      "command": "npm run type-check:watch",
      "description": "TypeScript类型检查监听"
    },
    {
      "name": "test-watch",
      "command": "npm run test:watch", 
      "description": "测试监听模式"
    },
    {
      "name": "build-watch",
      "command": "npm run build:watch",
      "description": "构建监听"
    }
  ]
}
```
**效果**：完整的开发环境，代理可以全面了解项目状态

## 4. 后端项目配置示例
```json
{
  "user": "ubuntu",
  "install": "./.cursor/install.sh",
  "terminals": [
    {
      "name": "api-server",
      "command": "npm run start:dev",
      "description": "启动API服务器"
    },
    {
      "name": "database",
      "command": "docker-compose up postgres",
      "description": "启动数据库服务"
    },
    {
      "name": "logs",
      "command": "tail -f logs/app.log",
      "description": "监控应用日志"
    }
  ]
}
```

## 5. 前端项目配置示例
```json
{
  "user": "ubuntu",
  "install": "./.cursor/install.sh",
  "terminals": [
    {
      "name": "dev-server",
      "command": "npm run dev",
      "description": "开发服务器"
    },
    {
      "name": "storybook",
      "command": "npm run storybook",
      "description": "组件文档"
    },
    {
      "name": "lint-watch",
      "command": "npm run lint:watch",
      "description": "代码检查"
    }
  ]
}
```

## 配置建议

### 根据项目类型选择：
- **简单静态站点**：1个terminal（开发服务器）
- **Next.js应用**：2-3个terminals（开发服务器 + 构建监听 + 类型检查）
- **全栈应用**：3-4个terminals（前端 + 后端 + 数据库 + 日志）
- **微服务项目**：4+个terminals（多个服务 + 监控 + 日志）

### 性能考虑：
- 每个terminal都会消耗资源
- 建议不超过4-5个terminals
- 优先配置最重要的服务 