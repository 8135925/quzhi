import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { categories, iconLegend } from '../data/navigation'

/**
 * 首页组件
 * 展示软件分类入口和项目介绍
 */
export default function Home() {
  const { lang } = useLanguage()

  // 按分组整理
  const groups = {}
  categories.forEach(cat => {
    const groupName = cat.group[lang]
    if (!groups[groupName]) groups[groupName] = []
    groups[groupName].push(cat)
  })

  return (
    <div className="space-y-12">
      {/* Hero 区域 */}
      <section className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-md-primary-container text-md-on-primary-container mb-6">
          <i className="bi bi-stars text-4xl"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-md-on-surface mb-4">
          {lang === 'zh' ? '趣址' : 'QuZhi'}
        </h1>
        <p className="text-lg text-md-on-surface-variant max-w-2xl mx-auto mb-8">
          {lang === 'zh'
            ? '收录优质免费开源软件，让每个人都能找到趁手的工具'
            : 'Curated collection of quality free and open source software for everyone'}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/category/system" className="md-btn-filled">
            <i className="bi bi-rocket-takeoff-fill"></i>
            <span>{lang === 'zh' ? '开始探索' : 'Get Started'}</span>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md-btn-outlined"
          >
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </section>

      {/* 图标说明 */}
      <section className="md-card">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <i className="bi bi-info-circle-fill text-md-primary"></i>
          {lang === 'zh' ? '图标说明' : 'Icon Legend'}
        </h2>
        <div className="flex flex-wrap gap-4">
          {iconLegend.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <i className={`bi ${item.icon} text-md-primary text-lg`}></i>
              <span className="text-md-on-surface-variant">{item.label[lang]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 分类卡片 */}
      {Object.entries(groups).map(([groupName, items]) => (
        <section key={groupName}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-md-primary rounded-full"></span>
            {groupName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(cat => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="md-card-interactive group block"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-md-primary-container text-md-on-primary-container shrink-0">
                    <i className={`bi ${cat.icon} text-2xl`}></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-md-on-surface mb-1 group-hover:text-md-primary">
                      {cat.title[lang]}
                    </h3>
                    <p className="text-sm text-md-on-surface-variant line-clamp-2">
                      {cat.desc[lang]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
