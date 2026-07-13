import { useLanguage } from '../contexts/LanguageContext'

/**
 * 免责声明页面
 */
export default function Disclaimer() {
  const { lang } = useLanguage()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-md-on-surface mb-2">
          {lang === 'zh' ? '免责声明' : 'Disclaimer'}
        </h1>
      </header>

      <div className="md-card space-y-4">
        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '软件来源' : 'Software Sources'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '本网站收录的软件信息均来自互联网公开渠道，我们不对软件的安全性、完整性和可用性做出任何保证。用户在下载和使用软件前，请自行判断软件的安全性和适用性。'
              : 'The software information collected on this website comes from publicly available internet sources. We do not guarantee the security, integrity, or availability of any software. Users should assess the security and suitability of software before downloading and using it.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '版权说明' : 'Copyright Notice'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '本网站不存储任何软件文件，所有下载链接均指向软件官方来源。软件的版权归各自所有者所有，如有侵权，请联系我们删除。'
              : 'This website does not store any software files. All download links point to official software sources. Software copyrights belong to their respective owners. If there is any infringement, please contact us to remove it.'}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-md-on-surface mb-2">
            {lang === 'zh' ? '使用风险' : 'Usage Risk'}
          </h2>
          <p className="text-md-on-surface-variant leading-relaxed">
            {lang === 'zh'
              ? '用户使用本网站提供的软件信息所产生的一切后果，由用户自行承担。本网站不对因使用相关信息而造成的任何损失负责。'
              : 'Users bear all consequences arising from the use of software information provided on this website. We are not responsible for any losses caused by using the relevant information.'}
          </p>
        </section>
      </div>
    </div>
  )
}
