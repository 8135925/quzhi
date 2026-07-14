import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

/**
 * 页脚组件
 */
export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="border-t border-md-outline-variant bg-md-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="text-center text-sm text-md-on-surface-variant space-y-2">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <Link to="/about" className="hover:text-md-primary transition-colors">
              {lang === 'zh' ? '关于我们' : 'About Us'}
            </Link>
            <span className="text-md-outline-variant">|</span>
            <Link to="/disclaimer" className="hover:text-md-primary transition-colors">
              {lang === 'zh' ? '免责声明' : 'Disclaimer'}
            </Link>
            <span className="text-md-outline-variant">|</span>
            <Link to="/privacy" className="hover:text-md-primary transition-colors">
              {lang === 'zh' ? '隐私权政策' : 'Privacy Policy'}
            </Link>
          </p>
          <p>
            © 2026 {lang === 'zh' ? '趣址 · 陆壹' : 'QuZhi · LuYi'}.{' '}
            {lang === 'zh' ? 'All rights reserved.' : 'All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
