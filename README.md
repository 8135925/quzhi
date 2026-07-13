# 趣址 (QuZhi)

> 收录优质免费开源软件，使用 React + Vite + Tailwind CSS 构建，采用 Material Design 3 设计语言。

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Material Design 3](https://img.shields.io/badge/Material_Design-3-6750A4?logo=materialdesign&logoColor=white)](https://m3.material.design/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 项目简介

趣址（QuZhi）是一个收录优质免费开源软件的项目，旨在为用户提供便捷的软件发现和下载渠道。本项目使用现代前端技术栈构建，采用 Material Design 3 设计语言，提供优雅的用户界面和流畅的交互体验。

所有资源（字体、图标、样式等）均已本地化，支持在无网络环境下部署运行。

### 核心特性

- **Material Design 3** - 采用 Google 最新的 Material You 设计系统
- **双语支持** - 完整的中英文界面切换
- **深色模式** - 支持浅色/深色主题，自动跟随系统偏好
- **响应式布局** - 完美适配桌面、平板和移动设备
- **组件化架构** - 基于 React 函数式组件和 Hooks
- **软件分类** - 10 大分类，涵盖系统、网络、教育、游戏等
- **完全离线** - 所有静态资源本地化，无需联网即可运行

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| [React](https://react.dev/) | 18.3 | UI 框架 |
| [Vite](https://vitejs.dev/) | 5.4 | 构建工具 |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | 原子化 CSS 框架 |
| [React Router](https://reactrouter.com/) | 6.26 | 客户端路由 |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.13 | 图标库 |
| [@fontsource/roboto](https://fontsource.org/) | 5.x | 本地 Roboto 字体 |
| Material Design 3 | - | 设计系统 |

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0（或 pnpm / yarn）

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/your-username/quzhi.git
cd quzhi

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
# 构建打包
npm run build

# 本地预览生产版本
npm run preview
```

构建产物将输出到 `dist/` 目录，可直接部署到任意静态文件服务器，无需联网。

## 项目结构

```
quzhi/
├── public/                     # 静态资源
├── src/
│   ├── components/             # 通用组件
│   │   ├── Layout.jsx          # 主布局
│   │   ├── Header.jsx          # 顶部导航
│   │   ├── Sidebar.jsx         # 侧边栏
│   │   ├── Footer.jsx          # 页脚
│   │   ├── SoftwareCard.jsx    # 软件卡片
│   │   └── PlatformBadge.jsx   # 平台徽章
│   ├── contexts/               # React Context
│   │   ├── ThemeContext.jsx    # 主题上下文
│   │   └── LanguageContext.jsx # 语言上下文
│   ├── data/                   # 数据层
│   │   ├── navigation.js       # 导航配置
│   │   ├── changelog.js        # 更新日志
│   │   └── software/           # 软件数据
│   │       ├── index.js        # 统一导出
│   │       ├── system.js       # 系统软件
│   │       ├── network.js      # 网络软件
│   │       ├── educational.js  # 教育软件
│   │       ├── socialMedia.js  # 社交媒体软件
│   │       ├── videoGame.js    # 游戏软件
│   │       ├── productivity.js # 生产力软件
│   │       ├── textEditing.js  # 文本软件
│   │       ├── graphics.js     # 图形软件
│   │       ├── audio.js        # 音频软件
│   │       └── video.js        # 视频软件
│   ├── pages/                  # 页面组件
│   │   ├── Home.jsx            # 首页
│   │   ├── CategoryPage.jsx    # 分类页
│   │   ├── Changelog.jsx       # 更新日志
│   │   ├── About.jsx           # 关于
│   │   ├── Disclaimer.jsx      # 免责声明
│   │   └── Privacy.jsx         # 隐私政策
│   ├── App.jsx                 # 根组件与路由
│   ├── main.jsx                # 应用入口
│   └── index.css               # 全局样式
├── index.html                  # HTML 模板
├── tailwind.config.js          # Tailwind 配置
├── postcss.config.js           # PostCSS 配置
├── vite.config.js              # Vite 配置
└── package.json                # 项目依赖
```

## 软件分类

| 分类 | 说明 |
|------|------|
| 系统软件 | 控制和管理计算机硬件和软件资源 |
| 网络软件 | 提供网络服务功能的专用软件 |
| 教育软件 | 为教育服务设计的计算机程序 |
| 社交媒体软件 | 针对社交媒体平台的管理和增强功能 |
| 电子游戏软件 | 运行在电子设备上的互动游戏软件 |
| 生产力软件 | 用于产生资讯的应用软件 |
| 文本软件 | 编写和查看纯文本文件的文本编辑器 |
| 图像软件 | 创建、编辑和处理数字图像的软件 |
| 音频软件 | 用于录制、编辑、处理音频的软件 |
| 视频软件 | 用于播放或编辑视频的计算机程序 |

## 设计系统

本项目采用 Material Design 3 (Material You) 设计语言，基于紫色种子色 `#6750A4` 生成完整的色板系统。

### 色彩系统

| Token | 亮色 | 暗色 | 用途 |
|-------|------|------|------|
| `primary` | #6750A4 | #D0BCFF | 主色 |
| `on-primary` | #FFFFFF | #381E72 | 主色上的文字 |
| `surface` | #FFFBFE | #141218 | 表面背景 |
| `on-surface` | #1C1B1F | #E6E0E9 | 表面上的文字 |
| `surface-container` | #F3EDF7 | #211F26 | 容器背景 |
| `outline` | #79747E | #938F99 | 边框 |

### 组件样式

项目预置了 Material Design 3 风格的组件类：

```css
/* 按钮样式 */
.md-btn-filled    /* 填充按钮 */
.md-btn-tonal     /* 色调按钮 */
.md-btn-outlined  /* 轮廓按钮 */
.md-btn-text      /* 文本按钮 */

/* 卡片样式 */
.md-card              /* 基础卡片 */
.md-card-interactive  /* 可交互卡片 */
```

## 功能特性

### 主题切换

支持浅色/深色主题切换，主题偏好保存在浏览器本地存储中，首次访问时自动跟随系统偏好。

### 语言切换

支持中文/英文双语切换，语言偏好保存在浏览器本地存储中，首次访问时根据浏览器语言自动判断。

### 响应式设计

- **桌面端**：显示完整侧边栏导航
- **平板端**：折叠侧边栏，使用顶部下拉菜单
- **移动端**：汉堡菜单导航

### 离线运行

所有静态资源（字体、图标、样式）均通过 npm 包管理并本地化打包，构建后的产物可在完全无网络环境下正常运行。

## 开发指南

### 添加新软件

在 `src/data/software/` 目录下找到对应分类的数据文件，按照以下格式添加：

```javascript
{
  name: '软件名称',
  url: 'https://example.com',
  desc: '软件描述',
  platforms: ['windows', 'linux'],  // 可选
  links: [                          // 可选
    { type: 'github', url: 'https://github.com/...' }
  ],
  children: [                       // 可选，子项
    { name: '子软件', url: 'https://...' }
  ]
}
```

### 平台标识

支持的平台标识：

| 标识 | 说明 |
|------|------|
| `windows` | Windows |
| `apple` | macOS / iOS |
| `linux` | Linux |
| `android` | Android |
| `browser` | 浏览器扩展 |
| `web` | 网页应用 |
| `cli` | 命令行工具 |

### 链接类型

支持的链接类型：

| 类型 | 说明 |
|------|------|
| `github` | GitHub 仓库 |
| `gitlab` | GitLab 仓库 |
| `sourceforge` | SourceForge 项目 |
| `indexes` | 索引目录 |

## 浏览器支持

- Chrome / Edge >= 90
- Firefox >= 88
- Safari >= 14

## 贡献指南

欢迎通过以下方式贡献：

1. **添加软件** - 提交 Pull Request 添加新的优质软件
2. **修正错误** - 发现信息有误？提交 Issue 或 PR
3. **改进文档** - 帮助完善文档和说明
4. **翻译校对** - 协助校对中英文翻译

### 提交规范

```
feat: 新增功能
fix: 修复 bug
docs: 文档更新
style: 代码格式
refactor: 重构
chore: 构建/工具变动
```

## 开源协议

本项目基于 [MIT License](LICENSE) 开源。

软件信息的版权归各自所有者所有，本项目仅做收录整理。

## 致谢

- [React](https://react.dev/) - UI 框架
- [Vite](https://vitejs.dev/) - 构建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Material Design 3](https://m3.material.design/) - 设计系统
- [Bootstrap Icons](https://icons.getbootstrap.com/) - 图标库
- [React Router](https://reactrouter.com/) - 路由管理
- [Fontsource](https://fontsource.org/) - 本地字体方案

---

<p align="center">
  Made with ❤️ using React + Vite + Tailwind CSS
</p>
