import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { categories, getNav } from '../data/navigation'

/**
 * 顶部导航栏组件
 * 包含 Logo、分类导航、语言切换、主题切换
 */
export default function Header() {
  const { lang, toggleLang } = useLanguage()
  const { isDark, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const navItems = getNav(lang)

  const handleNavClick = (e, item) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (item.items) {
      // 分组项 - 切换到第一个分类
      navigate(`/category/${item.items[0].link}`)
    } else if (item.link === '') {
      navigate('/')
    } else if (item.link === 'changelog') {
      navigate('/changelog')
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-md-surface/95 backdrop-blur-md border-b border-md-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-md-primary font-bold text-xl">
            <i className="bi bi-stars text-2xl"></i>
            <span>{lang === 'zh' ? '趣址' : 'QuZhi'}</span>
          </Link>

          {/* 桌面端导航 */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.link === '' ? '/' : `/${item.link}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="md-btn-text px-4 py-2"
                >
                  {item.text}
                  {item.items && <i className="bi bi-chevron-down text-xs ml-1"></i>}
                </a>
                {item.items && (
                  <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-md-surface-container rounded-md shadow-lg py-2 min-w-[200px] border border-md-outline-variant">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/category/${subItem.link}`}
                        className="block px-4 py-2 text-sm hover:bg-md-primary/10 text-md-on-surface"
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 右侧操作 */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="md-btn-text px-3 py-2"
              aria-label="切换语言"
            >
              <i className="bi bi-translate"></i>
              <span className="text-sm">{lang === 'zh' ? 'EN' : '中'}</span>
            </button>
            <button
              onClick={toggleTheme}
              className="md-btn-text px-3 py-2"
              aria-label="切换主题"
            >
              <i className={`bi ${isDark ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md-btn-text px-3 py-2 md:hidden"
              aria-label="菜单"
            >
              <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-md-outline-variant">
            {navItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.link === '' ? '/' : `/${item.link}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className="block px-4 py-3 text-md-on-surface hover:bg-md-primary/10 rounded-md"
                >
                  {item.text}
                </a>
                {item.items && (
                  <div className="pl-4">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={`/category/${subItem.link}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm text-md-on-surface-variant hover:bg-md-primary/10 rounded-md"
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
