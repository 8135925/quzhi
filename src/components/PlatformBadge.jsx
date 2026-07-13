import { platformMap } from '../data/navigation'

/**
 * 平台徽章组件
 * 显示软件支持的平台标签
 */
export default function PlatformBadge({ platform }) {
  const config = platformMap[platform]
  if (!config) return null

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full bg-md-surface-container-high text-md-on-surface-variant"
      title={config.label}
    >
      <i className={`bi ${config.icon}`}></i>
      <span>{config.label}</span>
    </span>
  )
}
