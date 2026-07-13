/**
 * 导航配置数据
 * 包含顶部导航栏和侧边栏的配置
 */

// 软件分类配置 - 包含图标和双语标题
export const categories = [
  {
    id: 'system',
    icon: 'bi-gear-fill',
    title: { zh: '系统软件', en: 'System software' },
    desc: {
      zh: '控制和管理计算机硬件和软件资源',
      en: 'Control and manage computer hardware and software resources',
    },
    group: { zh: '操作系统软件', en: 'OS software' },
  },
  {
    id: 'network',
    icon: 'bi-globe2',
    title: { zh: '网络软件', en: 'Network software' },
    desc: {
      zh: '提供网络服务功能的专用软件',
      en: 'Specialized software providing network service functions',
    },
    group: { zh: '操作系统软件', en: 'OS software' },
  },
  {
    id: 'educational',
    icon: 'bi-mortarboard-fill',
    title: { zh: '教育软件', en: 'Educational software' },
    desc: {
      zh: '为教育服务设计的计算机程序',
      en: 'Computer programs designed for educational services',
    },
    group: { zh: '互联网软件', en: 'Internet software' },
  },
  {
    id: 'social-media',
    icon: 'bi-phone-fill',
    title: { zh: '社交媒体软件', en: 'Social media software' },
    desc: {
      zh: '针对社交媒体平台的管理和增强功能',
      en: 'Management and Enhancement Features for Social Media Platforms',
    },
    group: { zh: '互联网软件', en: 'Internet software' },
  },
  {
    id: 'video-game',
    icon: 'bi-controller',
    title: { zh: '电子游戏软件', en: 'Video game software' },
    desc: {
      zh: '运行在电子设备上的互动游戏软件',
      en: 'Interactive game software running on electronic devices',
    },
    group: { zh: '互联网软件', en: 'Internet software' },
  },
  {
    id: 'productivity',
    icon: 'bi-briefcase-fill',
    title: { zh: '生产力软件', en: 'Productivity software' },
    desc: {
      zh: '用于产生资讯的应用软件',
      en: 'Application software used to generate information',
    },
    group: { zh: '互联网软件', en: 'Internet software' },
  },
  {
    id: 'text',
    icon: 'bi-pencil-square',
    title: { zh: '文本软件', en: 'Text software' },
    desc: {
      zh: '编写和查看纯文本文件的文本编辑器',
      en: 'A text editor for writing and viewing plain text files',
    },
    group: { zh: '文件软件', en: 'File software' },
  },
  {
    id: 'graphics',
    icon: 'bi-image',
    title: { zh: '图像软件', en: 'Graphics software' },
    desc: {
      zh: '创建、编辑和处理数字图像的软件',
      en: 'Software for creating, editing, and processing digital images',
    },
    group: { zh: '文件软件', en: 'File software' },
  },
  {
    id: 'audio',
    icon: 'bi-headphones',
    title: { zh: '音频软件', en: 'Audio software' },
    desc: {
      zh: '用于录制、编辑、处理音频的软件',
      en: 'Software for recording, editing, and processing audio',
    },
    group: { zh: '文件软件', en: 'File software' },
  },
  {
    id: 'video',
    icon: 'bi-camera-video-fill',
    title: { zh: '视频软件', en: 'Video software' },
    desc: {
      zh: '用于播放或编辑视频的计算机程序',
      en: 'A computer program used for playing or editing videos',
    },
    group: { zh: '文件软件', en: 'File software' },
  },
]

// 图标说明
export const iconLegend = [
  { icon: 'bi-apple', label: { zh: '苹果操作系统', en: 'Apple OS' } },
  { icon: 'bi-browser-chrome', label: { zh: '浏览器扩展', en: 'Browser extension' } },
  { icon: 'bi-terminal-fill', label: { zh: '命令行界面', en: 'CLI' } },
  { icon: 'bi-folder-fill', label: { zh: '索引目录', en: 'Indexes' } },
  { icon: 'bi-globe2', label: { zh: '网页端', en: 'Web' } },
]

// 平台标签映射
export const platformMap = {
  windows: { icon: 'bi-windows', label: 'Windows' },
  apple: { icon: 'bi-apple', label: 'Apple' },
  linux: { icon: 'bi-ubuntu', label: 'Linux' },
  android: { icon: 'bi-android', label: 'Android' },
  browser: { icon: 'bi-browser-chrome', label: 'Browser' },
  web: { icon: 'bi-globe2', label: 'Web' },
  cli: { icon: 'bi-terminal-fill', label: 'CLI' },
  github: { icon: 'bi-github', label: 'GitHub' },
  gitlab: { icon: 'bi-gitlab', label: 'GitLab' },
  sourceforge: { icon: 'bi-box-seam', label: 'SourceForge' },
  indexes: { icon: 'bi-folder-fill', label: 'Indexes' },
}

// 生成顶部导航
export function getNav(lang = 'zh') {
  const groups = {}
  categories.forEach(cat => {
    if (!groups[cat.group[lang]]) groups[cat.group[lang]] = []
    groups[cat.group[lang]].push({
      text: cat.title[lang],
      link: cat.id,
    })
  })

  const nav = [
    { text: lang === 'zh' ? '首页' : 'Home', link: '' },
  ]

  Object.entries(groups).forEach(([groupName, items]) => {
    nav.push({ text: groupName, items })
  })

  nav.push({
    text: lang === 'zh' ? '更新日志' : 'Changelog',
    link: 'changelog',
  })

  return nav
}
