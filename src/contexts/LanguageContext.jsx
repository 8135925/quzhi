import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved) return saved
    // 根据浏览器语言判断默认语言
    return navigator.language.startsWith('zh') ? 'zh' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en-US'
  }, [lang])

  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh')

  // 获取带语言前缀的路径
  const getPath = (path) => {
    if (lang === 'zh') return `/zh${path}`
    return path
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, getPath }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
