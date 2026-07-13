import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CategoryPage from './pages/CategoryPage'
import Changelog from './pages/Changelog'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import Privacy from './pages/Privacy'

/**
 * 应用根组件
 * 配置路由
 * 主题与语言上下文在 main.jsx 中提供
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:categoryId" element={<CategoryPage />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="about" element={<About />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
