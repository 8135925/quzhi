import { useLanguage } from '../contexts/LanguageContext'

/**
 * 关于页面
 */
export default function About() {
  const { lang } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-md-on-surface mb-2">
          {lang === 'zh' ? '关于我们' : 'About Us'}
        </h1>
      </header>

      <div className="md-card space-y-4">
        <h2 className="text-xl font-semibold text-md-on-surface">
          {lang === 'zh' ? '项目简介' : 'Project Introduction'}
        </h2>
        <p className="text-md-on-surface-variant leading-relaxed">
          {lang === 'zh'
            ? '趣址（QuZhi）是一个收录优质免费开源软件的项目，旨在为用户提供便捷的软件发现和下载渠道。我们相信优秀的软件应该被更多人知道和使用。'
            : 'QuZhi is a project that curates quality free and open source software, aiming to provide users with a convenient way to discover and download software. We believe excellent software should be known and used by more people.'}
        </p>
      </div>

      <div className="md-card space-y-4">
        <h2 className="text-xl font-semibold text-md-on-surface">
          {lang === 'zh' ? '技术栈' : 'Tech Stack'}
        </h2>
        <p className="text-md-on-surface-variant mb-3">
          {lang === 'zh' ? '本项目使用以下技术构建：' : 'This project is built with the following technologies:'}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'React 18', desc: lang === 'zh' ? 'UI 框架' : 'UI Framework' },
            { name: 'Vite', desc: lang === 'zh' ? '构建工具' : 'Build Tool' },
            { name: 'Tailwind CSS', desc: lang === 'zh' ? '样式框架' : 'CSS Framework' },
            { name: 'Material Design 3', desc: lang === 'zh' ? '设计系统' : 'Design System' },
            { name: 'React Router v6', desc: lang === 'zh' ? '路由管理' : 'Routing' },
            { name: 'Bootstrap Icons', desc: lang === 'zh' ? '图标库' : 'Icon Library' },
          ].map(tech => (
            <div key={tech.name} className="p-3 rounded-lg bg-md-surface-container-high">
              <div className="font-medium text-md-on-surface">{tech.name}</div>
              <div className="text-sm text-md-on-surface-variant">{tech.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="md-card space-y-4">
        <h2 className="text-xl font-semibold text-md-on-surface">
          {lang === 'zh' ? '贡献指南' : 'Contributing'}
        </h2>
        <p className="text-md-on-surface-variant leading-relaxed">
          {lang === 'zh'
            ? '欢迎通过 GitHub 提交 Issue 或 Pull Request 来帮助完善这个项目。无论是添加新软件、修正错误还是改进文档，都是对我们最大的支持。'
            : 'Contributions are welcome via GitHub Issues or Pull Requests. Whether adding new software, fixing errors, or improving documentation, your support means a lot to us.'}
        </p>
      </div>
    </div>
  )
}
