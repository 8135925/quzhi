import { useLanguage } from '../contexts/LanguageContext'

/**
 * 隐私政策页面
 */
export default function Privacy() {
  const { lang } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-md-on-surface mb-2">
          {lang === 'zh' ? '隐私政策' : 'Privacy Policy'}
        </h1>
      </header>

      <div className="md-card space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '信息收集' : 'Information Collection'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '本网站不主动收集用户的个人信息。我们仅在用户主动选择时存储以下信息到浏览器本地存储中：'
              : 'This website does not actively collect user personal information. We only store the following information in the browser local storage when users actively choose:'}
          </p>
          <ul className="mt-2 space-y-1 text-md-on-surface-variant">
            <li>· {lang === 'zh' ? '主题偏好（深色/浅色模式）' : 'Theme preference (dark/light mode)'}</li>
            <li>· {lang === 'zh' ? '语言偏好（中文/英文）' : 'Language preference (Chinese/English)'}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '数据存储' : 'Data Storage'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '所有偏好设置均存储在用户浏览器的本地存储中，不会上传到服务器。用户可以随时通过清除浏览器数据来删除这些信息。'
              : 'All preferences are stored in the browser local storage and are not uploaded to any server. Users can delete this information at any time by clearing browser data.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '外部链接' : 'External Links'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '本网站包含指向第三方网站的外部链接。我们不对这些网站的隐私政策负责，请在访问时注意查看其隐私条款。'
              : 'This website contains external links to third-party websites. We are not responsible for the privacy policies of these websites. Please review their privacy terms when visiting.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '政策更新' : 'Policy Updates'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '本隐私政策可能会不定期更新。我们建议用户定期查看本页面以了解最新的隐私政策。'
              : 'This privacy policy may be updated periodically. We recommend users check this page regularly for the latest privacy policy.'}
          </p>
        </section>
      </div>
    </div>
  )
}
