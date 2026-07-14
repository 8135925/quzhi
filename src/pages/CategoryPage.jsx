import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { categories } from '../data/navigation'
import { allSoftware } from '../data/software'
import SoftwareCard from '../components/SoftwareCard'

/**
 * 分类页面组件
 * 根据分类 ID 显示对应的软件列表
 * 左侧包含页面导航（当前分类的 section 目录），随右侧滚动高亮
 */
export default function CategoryPage() {
  const { categoryId } = useParams()
  const { lang } = useLanguage()

  // 查找分类信息
  const category = categories.find(c => c.id === categoryId)
  if (!category) return <Navigate to="/" replace />

  // 查找软件数据
  const software = allSoftware.find(s => {
    const parts = s.id.split('-')
    return parts[0] === categoryId || s.id.startsWith(categoryId)
  })
  if (!software) return <Navigate to="/" replace />

  // 收集所有 section 和 subsection 的 id 作为锚点
  const anchors = []
  software.sections.forEach(section => {
    anchors.push({ id: section.id, isSub: false })
    if (section.subsections) {
      section.subsections.forEach(sub => {
        anchors.push({ id: sub.id, isSub: true })
      })
    }
  })

  const [activeId, setActiveId] = useState(anchors[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // 找到当前最靠近视窗顶部的可见条目
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        // 顶部留出 Header 高度，触发更早
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    )

    const elements = anchors
      .map(a => document.getElementById(a.id))
      .filter(Boolean)
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  return (
    <div className="space-y-8">
      {/* 面包屑 */}
      <nav className="flex items-center gap-2 text-sm text-md-on-surface-variant">
        <Link to="/" className="hover:text-md-primary">
          {lang === 'zh' ? '首页' : 'Home'}
        </Link>
        <i className="bi bi-chevron-right text-xs"></i>
        <span className="text-md-on-surface">{category.title[lang]}</span>
      </nav>

      {/* 标题区 */}
      <header className="flex items-start gap-4 pb-6 border-b border-md-outline-variant">
        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-md-primary-container text-md-on-primary-container shrink-0">
          <i className={`bi ${category.icon} text-3xl`}></i>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-md-on-surface mb-2">
            {software.title[lang]}
          </h1>
          <p className="text-md-on-surface-variant">{category.desc[lang]}</p>
        </div>
      </header>

      {/* 主体：左侧页面导航 + 右侧软件列表 */}
      <div className="lg:flex lg:gap-8">
        <PageNav sections={software.sections} lang={lang} activeId={activeId} />
        <div className="flex-1 min-w-0 space-y-8">
          {software.sections.map(section => (
            <Section key={section.id} section={section} lang={lang} />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * 页面导航组件
 * 显示当前分类下所有 section 和 subsection 标题作为锚点目录
 * 当前可视区域的条目高亮显示
 */
function PageNav({ sections, lang, activeId }) {
  const navRef = useRef(null)

  // 滚动到激活项可见
  useEffect(() => {
    if (!navRef.current || !activeId) return
    const activeEl = navRef.current.querySelector(`[data-id="${activeId}"]`)
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeId])

  const baseClass = "block px-3 py-1.5 text-sm rounded-r-md transition-colors"
  const activeClass = "text-md-primary font-medium bg-md-primary/10 border-l-2 border-md-primary -ml-[1px]"
  const inactiveClass = "text-md-on-surface-variant hover:text-md-primary hover:bg-md-primary/5"

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <nav
        ref={navRef}
        className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2"
      >
        <h2 className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-md-on-surface-variant">
          {lang === 'zh' ? '页面导航' : 'On this page'}
        </h2>
        <ul className="space-y-0.5 border-l border-md-outline-variant">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                data-id={section.id}
                className={`${baseClass} ${activeId === section.id ? activeClass : inactiveClass}`}
              >
                {section.title[lang]}
              </a>
              {section.subsections && section.subsections.map(sub => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  data-id={sub.id}
                  className={`${baseClass} pl-6 ${activeId === sub.id ? activeClass : inactiveClass}`}
                >
                  {sub.title[lang]}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

/**
 * 渲染分区
 */
function Section({ section, lang }) {
  return (
    <section id={section.id} className="scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-md-on-surface">
        <i className="bi bi-folder-fill text-md-primary"></i>
        {section.title[lang]}
      </h2>

      {section.items && section.items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {section.items.map((item, idx) => (
            <SoftwareCard key={idx} item={item} />
          ))}
        </div>
      )}

      {section.subsections && section.subsections.map(sub => (
        <div key={sub.id} id={sub.id} className="ml-4 md:ml-8 mb-6 scroll-mt-20">
          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-md-on-surface-variant">
            <i className="bi bi-dot text-md-primary"></i>
            {sub.title[lang]}
          </h3>
          {/* 交叉引用 - 指向其他分类 */}
          {sub.crossRef ? (
            <div className="md-card flex items-center gap-3">
              <i className="bi bi-arrow-return-right text-md-primary text-xl"></i>
              <Link
                to={`/category/${sub.crossRef.link.split('#')[0]}`}
                className="text-md-primary hover:underline font-medium"
              >
                {sub.crossRef[lang]}
              </Link>
            </div>
          ) : (
            sub.items && sub.items.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sub.items.map((item, idx) => (
                  <SoftwareCard key={idx} item={item} />
                ))}
              </div>
            )
          )}
        </div>
      ))}
    </section>
  )
}
