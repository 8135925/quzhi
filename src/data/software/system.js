/**
 * 系统软件数据
 */
export const systemSoftware = {
  id: 'system-software',
  title: { zh: '系统软件', en: 'System software' },
  sections: [
    {
      title: { zh: '启动盘制作工具', en: 'Bootable USB' },
      id: 'bootable-usb',
      items: [
        { name: 'Ventoy', url: 'https://www.ventoy.net/cn/', desc: '新一代多系统启动U盘解决方案', links: [{ type: 'github', url: 'https://github.com/ventoy/Ventoy' }] },
        { name: 'Rufus', url: 'https://rufus.ie/zh/', desc: '轻松创建 USB 启动盘', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/pbatard/rufus' }] },
        { name: 'balenaEtcher', url: 'https://etcher.balena.io/', links: [{ type: 'github', url: 'https://github.com/balena-io/etcher' }] },
      ],
    },
    {
      title: { zh: '数据管理软件', en: 'Data management software' },
      id: 'data-management-software',
      subsections: [
        {
          title: { zh: '压缩软件', en: 'File archivers' },
          id: 'file-archivers',
          items: [
            { name: '7-Zip', url: 'https://sparanoid.com/lab/7z/', desc: '一款拥有极高压缩比的开源压缩软件', links: [{ type: 'github', url: 'https://github.com/ip7z/7zip' }], children: [
              { name: '7-Zip ZS', url: 'https://mcmilk.de/projects/7-Zip-zstd/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/mcmilk/7-Zip-zstd/' }] },
              { name: 'NanaZip', url: 'https://nanazip.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/M2Team/NanaZip' }] },
            ]},
            { name: 'PeaZip', url: 'https://peazip.github.io/', links: [{ type: 'github', url: 'https://github.com/peazip/PeaZip/' }] },
            { name: 'Keka', url: 'https://www.keka.io/', desc: 'macOS 和 iOS 压缩文件管理器', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/aonez/Keka' }] },
            { name: 'ZipXtract', url: 'https://github.com/WirelessAlien/ZipXtract', platforms: ['android'] },
          ],
        },
        {
          title: { zh: '文件传输软件', en: 'File transfer software' },
          id: 'file-transfer-software',
          crossRef: { zh: '见网络软件 - 文件传输软件', en: 'See Network software - File transfer software', link: 'network#file-transfer-software' },
        },
      ],
    },
    {
      title: { zh: '桌面美化软件', en: 'Desktop environments' },
      id: 'desktop-environments',
      items: [
        { name: 'Seelen UI', url: 'https://seelen.io//zh-CN', desc: '自定义您的 Windows 桌面', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/eythaann/seelen-ui' }] },
        { name: 'Rainmeter', url: 'https://www.rainmeter.net/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/rainmeter/rainmeter' }] },
        { name: 'Cairo', url: 'https://cairodesktop.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/cairoshell/cairoshell' }] },
      ],
    },
    {
      title: { zh: '输入法', en: 'Input methods' },
      id: 'input-methods',
      items: [
        { name: 'FlorisBoard', url: 'https://florisboard.org/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/florisboard/florisboard' }] },
        { name: 'hallelujahIM', url: 'https://github.com/dongyuwei/hallelujahIM', desc: '哈利路亚英文输入法' },
      ],
      subsections: [
        {
          title: { zh: '中文输入法', en: 'Chinese input methods' },
          id: 'chinese-input-methods',
          items: [
            { name: 'Rime', url: 'https://rime.im/', desc: '中州韵输入法引擎', links: [{ type: 'indexes', url: 'https://rime.im/download/' }, { type: 'github', url: 'https://github.com/rime/librime' }], children: [
              { name: 'Weasel', url: 'https://github.com/rime/weasel', desc: '小狼毫输入法', platforms: ['windows'] },
              { name: 'Squirrel', url: 'https://github.com/rime/squirrel', desc: '鼠鬚管输入法', platforms: ['apple'] },
              { name: 'Trime', url: 'https://github.com/osfans/trime', desc: '同文安卓输入法平台', platforms: ['android'] },
            ]},
            { name: 'Fcitx 5', url: 'https://fcitx-im.org/wiki/Fcitx_5/zh-cn', desc: '小企鹅输入法 5', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/fcitx/fcitx5' }], children: [
              { name: 'Fcitx5 For Android', url: 'https://fcitx5-android.github.io/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/fcitx5-android/fcitx5-android' }] },
            ]},
            { name: 'YuyanIme', url: 'https://github.com/gurecn/YuyanIme', platforms: ['android'] },
          ],
        },
      ],
    },
    {
      title: { zh: 'KMS 激活工具', en: 'KMS activators' },
      id: 'kms-activators',
      items: [
        { name: 'Microsoft Activation Scripts', url: 'https://massgrave.dev/', desc: '开源 Windows 和 Office 激活工具', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/massgravel/Microsoft-Activation-Scripts' }] },
        { name: 'HEU KMS Activator', url: 'https://github.com/zbezj/HEU_KMS_Activator', platforms: ['windows'] },
        { name: 'CMWTAT Digital Edition', url: 'https://cmwtat.cloudmoe.com/cn.html', desc: '云萌 Windows 10+ 激活工具', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/TGSAN/CMWTAT_Digital_Edition' }] },
      ],
    },
    {
      title: { zh: '安全软件', en: 'Security software' },
      id: 'security-software',
      subsections: [
        {
          title: { zh: '密码管理器', en: 'Password managers' },
          id: 'password-managers',
          items: [
            { name: 'Bitwarden', url: 'https://bitwarden.com/', links: [{ type: 'github', url: 'https://github.com/bitwarden' }] },
            { name: 'KeePass', url: 'https://keepass.info/', links: [{ type: 'indexes', url: 'https://keepass.info/download.html' }, { type: 'sourceforge', url: 'https://sourceforge.net/projects/keepass/' }], children: [
              { name: 'KeePassXC', url: 'https://keepassxc.org/', links: [{ type: 'github', url: 'https://github.com/keepassxreboot/keepassxc' }] },
              { name: 'KeeWeb', url: 'https://keeweb.info/', links: [{ type: 'github', url: 'https://github.com/keeweb/keeweb' }] },
              { name: 'MacPass', url: 'https://macpassapp.org/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/MacPass/MacPass' }] },
              { name: 'KeePassDX', url: 'https://www.keepassdx.com/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/Kunzisoft/KeePassDX' }] },
              { name: 'Keepass2Android', url: 'https://github.com/PhilippC/keepass2android', platforms: ['android'] },
            ]},
            { name: 'Gopass', url: 'https://www.gopass.pw/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/gopasspw/gopass' }] },
            { name: 'LessPass', url: 'https://www.lesspass.com/', desc: '无状态密码管理器', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/lesspass/lesspass' }] },
            { name: 'AuthPass', url: 'https://authpass.app/', links: [{ type: 'github', url: 'https://github.com/authpass/authpass' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '存储软件', en: 'Storage software' },
      id: 'storage-software',
      subsections: [
        {
          title: { zh: '数据恢复软件', en: 'Data recovery software' },
          id: 'data-recovery-software',
          items: [
            { name: 'PhotoRec', url: 'https://www.cgsecurity.org/wiki/PhotoRec', links: [{ type: 'github', url: 'https://github.com/cgsecurity/testdisk' }] },
            { name: 'Digler', url: 'https://github.com/ostafen/digler' },
          ],
        },
        {
          title: { zh: '磁盘清理工具', en: 'Disk cleaners' },
          id: 'disk-cleaners',
          items: [
            { name: 'Mole', url: 'https://mole.fit/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/tw93/mole' }] },
            { name: 'BleachBit', url: 'https://www.bleachbit.org/', links: [{ type: 'github', url: 'https://github.com/bleachbit/bleachbit' }] },
            { name: 'PureMac', url: 'https://github.com/momenbasel/PureMac', desc: 'CleanMyMac 替代品', platforms: ['apple'] },
            { name: 'WindowsCleaner', url: 'https://wc.dyblog.online/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/darkmatter2048/WindowsCleaner' }] },
            { name: 'FluentCleaner', url: 'https://github.com/builtbybel/FluentCleaner', desc: 'CCleaner alternatives', platforms: ['windows'] },
            { name: 'Mac Sai', url: 'https://github.com/iliyami/MacSai', platforms: ['apple'] },
          ],
        },
        {
          title: { zh: '磁盘分区软件', en: 'Disk partitioning software' },
          id: 'disk-partitioning-software',
          items: [
            { name: 'TestDisk', url: 'https://www.cgsecurity.org/wiki/TestDisk', links: [{ type: 'github', url: 'https://github.com/cgsecurity/testdisk' }] },
            { name: 'GParted', url: 'https://gparted.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/GNOME/gparted' }] },
            { name: 'KDE Partition Manager', url: 'https://apps.kde.org/partitionmanager/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/partitionmanager' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '卸载软件', en: 'Uninstallers' },
      id: 'uninstallers',
      items: [
        { name: 'Bulk Crap Uninstaller', url: 'https://www.bcuninstaller.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Klocman/Bulk-Crap-Uninstaller' }] },
        { name: 'Pearcleaner', url: 'https://itsalin.com/appInfo/?id=pearcleaner', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/alienator88/Pearcleaner' }] },
        { name: 'Remove Windows Ai', url: 'https://github.com/zoicware/RemoveWindowsAI', desc: '在 Windows 11 中强制删除 Copilot、Recall 等', platforms: ['windows'] },
        { name: 'Universal Android Debloater Next Generation', url: 'https://github.com/Universal-Debloater-Alliance/universal-android-debloater-next-generation', desc: '移除预装软件', platforms: ['android'] },
      ],
    },
    {
      title: { zh: '实用软件', en: 'Utility software' },
      id: 'utility-software',
      subsections: [
        {
          title: { zh: 'Mac 实用工具', en: 'Mac utility' },
          id: 'mac-utility',
          items: [
            { name: 'MonitorControl', url: 'https://monitorcontrol.app/', desc: '显示器控制软件', links: [{ type: 'github', url: 'https://github.com/MonitorControl/MonitorControl' }] },
            { name: 'Ice', url: 'https://icemenubar.app/', desc: '菜单栏管理工具', links: [{ type: 'github', url: 'https://github.com/jordanbaird/Ice' }] },
            { name: 'AltTab', url: 'https://alt-tab.app/', desc: '任务切换器', links: [{ type: 'github', url: 'https://github.com/lwouis/alt-tab-macos' }] },
            { name: 'Mac Mouse Fix', url: 'https://macmousefix.com/', links: [{ type: 'github', url: 'https://github.com/noah-nuebling/mac-mouse-fix' }] },
          ],
        },
        {
          title: { zh: 'Windows 实用工具', en: 'Windows utility' },
          id: 'windows-utility',
          items: [
            { name: 'PowerToys', url: 'https://learn.microsoft.com/windows/powertoys/', links: [{ type: 'github', url: 'https://github.com/microsoft/powertoys' }] },
            { name: 'WinUtil', url: 'https://winutil.christitus.com/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/christitustech/winutil' }] },
            { name: 'Win11Debloat', url: 'https://github.com/raphire/win11debloat', platforms: ['cli'] },
            { name: 'Remove Windows AI', url: 'https://github.com/zoicware/RemoveWindowsAI' },
            { name: 'Winhance', url: 'https://winhance.net/', desc: 'Windows 增强工具', links: [{ type: 'github', url: 'https://github.com/memstechtips/Winhance' }] },
            { name: 'optimizerDuck', url: 'https://optimizerduck.vercel.app/', desc: 'Windows 优化工具', links: [{ type: 'github', url: 'https://github.com/itsfatduck/optimizerDuck' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '虚拟化软件', en: 'Virtualization software' },
      id: 'virtualization-software',
      subsections: [
        {
          title: { zh: '模拟器软件', en: 'Emulation software' },
          id: 'emulation-software',
          items: [
            { name: 'v86', url: 'https://copy.sh/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/copy/v86' }] },
            { name: 'iSH', url: 'https://ish.app/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/ish-app/ish' }] },
            { name: 'Ruffle', url: 'https://ruffle.rs/', links: [{ type: 'github', url: 'https://github.com/ruffle-rs/ruffle' }] },
            { name: 'Macintosh.js', url: 'https://github.com/felixrieseberg/macintosh.js' },
            { name: '86Box', url: 'https://86box.net/', links: [{ type: 'github', url: 'https://github.com/86Box/86Box' }] },
            { name: 'Vectras VM', url: 'https://vectras.vercel.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/xoureldeen/Vectras-VM-Android' }] },
            { name: 'PCjs Machines', url: 'https://www.pcjs.org/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/jeffpar/pcjs' }] },
            { name: 'Clock Signal', url: 'https://github.com/TomHarte/CLK' },
            { name: 'AppleWin', url: 'https://github.com/AppleWin/AppleWin', platforms: ['windows'] },
            { name: 'Nestopia UE', url: 'http://0ldsk00l.ca/nestopia/', links: [{ type: 'github', url: 'https://github.com/0ldsk00l/nestopia' }] },
            { name: 'Boxedwine', url: 'https://github.com/danoon2/Boxedwine' },
          ],
        },
        {
          title: { zh: '虚拟机', en: 'Virtual machines' },
          id: 'virtual-machines',
          items: [
            { name: 'VirtualBox', url: 'https://www.virtualbox.org/', desc: 'VMware Workstation 替代品', links: [{ type: 'github', url: 'https://github.com/VirtualBox/virtualbox' }] },
            { name: 'QEMU', url: 'https://github.com/qemu/QEMU', links: [{ type: 'github', url: 'https://github.com/qemu/QEMU' }], children: [
              { name: 'Quickemu', url: 'https://quickemu-project.github.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/quickemu-project/quickemu' }] },
              { name: 'UTM', url: 'https://getutm.app/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/utmapp/UTM' }] },
            ]},
            { name: 'Multipass', url: 'https://canonical.com/multipass', desc: 'Ubuntu 虚拟机', links: [{ type: 'github', url: 'https://github.com/canonical/multipass' }] },
          ],
        },
      ],
    },
  ],
}
