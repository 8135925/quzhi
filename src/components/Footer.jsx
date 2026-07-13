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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌信息 */}
          <div>
            <div className="flex items-center gap-2 text-md-primary font-bold text-lg mb-2">
              <i className="bi bi-stars text-xl"></i>
              <span>{lang === 'zh' ? '趣址' : 'QuZhi'}</span>
            </div>
            <p className="text-sm text-md-on-surface-variant">
              {lang === 'zh'
                ? '收集和分享优质免费开源软件'
                : 'Collecting and sharing quality free and open source software'}
            </p>
          </div>

          {/* 链接 */}
          <div>
            <h4 className="font-semibold mb-3 text-md-on-surface">
              {lang === 'zh' ? '关于' : 'About'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-md-on-surface-variant hover:text-md-primary">
                  {lang === 'zh' ? '关于我们' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-md-on-surface-variant hover:text-md-primary">
                  {lang === 'zh' ? '免责声明' : 'Disclaimer'}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-md-on-surface-variant hover:text-md-primary">
                  {lang === 'zh' ? '隐私政策' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="text-md-on-surface-variant hover:text-md-primary">
                  {lang === 'zh' ? '更新日志' : 'Changelog'}
                </Link>
              </li>
            </ul>
          </div>

          {/* 技术栈 */}
          <div>
            <h4 className="font-semibold mb-3 text-md-on-surface">
              {lang === 'zh' ? '技术栈' : 'Tech Stack'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vite', 'Tailwind CSS', 'Material Design 3'].map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-md-surface-container-high text-md-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-md-outline-variant text-center text-sm text-md-on-surface-variant">
          <p>
            © 2026 {lang === 'zh' ? '趣址' : 'QuZhi'} ·{' '}
            {lang === 'zh' ? '基于 React + Vite + Tailwind CSS 构建' : 'Built with React + Vite + Tailwind CSS'}
          </p>
        </div>
      </div>
    </footer>
  )
}
