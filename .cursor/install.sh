#!/bin/bash

# 徐晓龙博客项目 - 背景代理环境安装脚本

echo "🚀 开始安装项目依赖..."

# 检查Node.js版本
echo "📋 检查Node.js环境..."
node --version
npm --version

# 安装项目依赖
echo "📦 安装npm依赖..."
npm install

# 检查Next.js是否正确安装
echo "🔍 验证Next.js安装..."
npx next --version

# 创建必要的目录
echo "📁 创建必要目录..."
mkdir -p data
mkdir -p public/images

# 检查TypeScript配置
echo "🔧 检查TypeScript配置..."
if [ -f "tsconfig.json" ]; then
    echo "✅ TypeScript配置文件存在"
else
    echo "⚠️  TypeScript配置文件不存在，将在首次运行时创建"
fi

# 检查TailwindCSS配置
echo "🎨 检查TailwindCSS配置..."
if [ -f "tailwind.config.js" ]; then
    echo "✅ TailwindCSS配置文件存在"
else
    echo "⚠️  TailwindCSS配置文件不存在，需要配置"
fi

echo "✅ 环境安装完成！"
echo "💡 提示：运行 'npm run dev' 启动开发服务器" 