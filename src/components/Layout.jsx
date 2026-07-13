import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

/**
 * 主布局组件
 * 参考 xszn 设计：仅使用顶部导航栏，无左侧侧边栏
 * 包含顶部导航、内容区域和页脚
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-md-background text-md-on-background">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 md:py-12 max-w-6xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
