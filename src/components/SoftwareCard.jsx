import { useLanguage } from '../contexts/LanguageContext'
import { platformMap } from '../data/navigation'
import PlatformBadge from './PlatformBadge'

/**
 * 软件卡片组件
 * 展示单个软件的信息
 */
export default function SoftwareCard({ item }) {
  const { lang } = useLanguage()

  return (
    <div className="md-card-interactive group">
      <div className="flex items-start justify-between gap-3 mb-2">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-md-primary group-hover:underline"
        >
          {item.name}
        </a>
        {item.platforms && item.platforms.length > 0 && (
          <div className="flex flex-wrap gap-1 shrink-0">
            {item.platforms.map(p => (
              <PlatformBadge key={p} platform={p} />
            ))}
          </div>
        )}
      </div>

      {item.desc && (
        <p className="text-sm text-md-on-surface-variant mb-3">{item.desc}</p>
      )}

      {/* 链接按钮 */}
      {item.links && item.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {item.links.map((link, idx) => {
            const config = platformMap[link.type]
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="md-btn-tonal px-3 py-1.5 text-xs"
                title={config?.label || link.type}
              >
                <i className={`bi ${config?.icon || 'bi-box-arrow-up-right'}`}></i>
                <span>{config?.label || link.type}</span>
              </a>
            )
          })}
        </div>
      )}

      {/* 子项 */}
      {item.children && item.children.length > 0 && (
        <div className="mt-4 pl-4 border-l-2 border-md-outline-variant space-y-2">
          {item.children.map((child, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <a
                href={child.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-md-primary hover:underline"
              >
                {child.name}
              </a>
              {child.desc && (
                <span className="text-xs text-md-on-surface-variant">· {child.desc}</span>
              )}
              {child.platforms && child.platforms.map(p => (
                <PlatformBadge key={p} platform={p} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
