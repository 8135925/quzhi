import { useLanguage } from '../contexts/LanguageContext'
import { changelogs } from '../data/changelog'

/**
 * 更新日志页面
 */
export default function Changelog() {
  const { lang } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-md-on-surface mb-2">
          {lang === 'zh' ? '更新日志' : 'Changelog'}
        </h1>
        <p className="text-md-on-surface-variant">
          {lang === 'zh' ? '查看项目的版本更新记录' : 'View project version history'}
        </p>
      </header>

      {changelogs.map(log => (
        <div key={log.version} className="md-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-md-primary-container text-md-on-primary-container text-sm font-medium">
                <i className="bi bi-tag-fill"></i>
                v{log.version}
              </span>
              <h2 className="text-xl font-semibold text-md-on-surface">
                {log.title[lang]}
              </h2>
            </div>
            <time className="text-sm text-md-on-surface-variant">{log.date}</time>
          </div>
          <ul className="space-y-2">
            {log.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-md-on-surface-variant">
                <i className="bi bi-check-circle-fill text-md-primary mt-0.5"></i>
                <span>{item[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
