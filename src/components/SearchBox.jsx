import { useState, useRef, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { allSoftware } from '../data/software'

/**
 * 顶部搜索框组件
 * 支持按软件名称、描述模糊搜索
 * 展示搜索结果下拉列表，点击跳转到对应分类页
 */
export default function SearchBox() {
  const { lang } = useLanguage()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // 构建软件索引：扁平化所有 items 和 children
  const index = useMemo(() => {
    const list = []
    allSoftware.forEach(category => {
      const categoryName = category.title[lang]
      const categoryId = category.id
      const parts = categoryId.split('-')
      const navId = parts[0]

      const walkItems = (items, sectionTitle, subsectionTitle) => {
        if (!items) return
        items.forEach(item => {
          list.push({
            name: item.name,
            desc: item.desc || '',
            categoryName,
            navId,
            sectionTitle: sectionTitle || '',
            subsectionTitle: subsectionTitle || '',
          })
          if (item.children) {
            item.children.forEach(child => {
              list.push({
                name: child.name,
                desc: child.desc || '',
                categoryName,
                navId,
                sectionTitle: sectionTitle || '',
                subsectionTitle: subsectionTitle || '',
              })
            })
          }
        })
      }

      category.sections.forEach(section => {
        const sectionTitle = section.title[lang]
        walkItems(section.items, sectionTitle, '')
        if (section.subsections) {
          section.subsections.forEach(sub => {
            walkItems(sub.items, sectionTitle, sub.title[lang])
          })
        }
      })
    })
    return list
  }, [lang])

  // 过滤搜索结果
  const results = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase().trim()
    return index
      .filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q)
      )
      .slice(0, 8)
  }, [query, index])

  // 点击外部关闭
  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // 重置选中索引
  useEffect(() => {
    setActiveIndex(-1)
  }, [query])

  const handleSelect = (item) => {
    navigate(`/category/${item.navId}`)
    setQuery('')
    setOpen(false)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e) => {
    if (!open || results.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => (prev + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => (prev - 1 + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex >= 0) {
        handleSelect(results[activeIndex])
      } else if (results.length > 0) {
        handleSelect(results[0])
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div ref={containerRef} className="relative flex-1 max-w-md mx-4 hidden md:block">
      <div className="relative">
        <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-md-on-surface-variant text-sm pointer-events-none"></i>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => query && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={lang === 'zh' ? '搜索软件...' : 'Search software...'}
          className="w-full pl-9 pr-3 py-2 text-sm rounded-full bg-md-surface-container-high text-md-on-surface placeholder:text-md-on-surface-variant border border-transparent focus:border-md-primary focus:outline-none transition-colors"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setOpen(false)
              inputRef.current?.focus()
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-md-on-surface-variant hover:text-md-on-surface"
            aria-label="清空"
          >
            <i className="bi bi-x-lg text-xs"></i>
          </button>
        )}
      </div>

      {/* 搜索结果下拉 */}
      {open && query && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-md-surface-container rounded-lg shadow-lg border border-md-outline-variant overflow-hidden z-50">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-md-on-surface-variant">
              <i className="bi bi-emoji-frown text-xl block mb-2"></i>
              {lang === 'zh' ? '未找到相关软件' : 'No software found'}
            </div>
          ) : (
            <ul className="max-h-96 overflow-y-auto py-1">
              {results.map((item, idx) => (
                <li key={idx}>
                  <button
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left px-4 py-2.5 transition-colors ${
                      activeIndex === idx
                        ? 'bg-md-primary/10 text-md-primary'
                        : 'hover:bg-md-primary/5'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-medium text-sm">{item.name}</span>
                      <span className="text-xs text-md-on-surface-variant shrink-0">
                        {item.categoryName}
                      </span>
                    </div>
                    {item.desc && (
                      <p className="text-xs text-md-on-surface-variant mt-0.5 line-clamp-1">
                        {item.desc}
                      </p>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
