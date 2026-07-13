/**
 * 网络软件数据
 */
export const networkSoftware = {
  id: 'network-software',
  title: { zh: '网络软件', en: 'Network software' },
  sections: [
    {
      title: { zh: '广告拦截软件', en: 'Ad blocking software' },
      id: 'ad-blocking-software',
      items: [
        { name: 'AdBlock', url: 'https://getadblock.com/', platforms: ['browser'], links: [{ type: 'gitlab', url: 'https://gitlab.com/eyeo/browser-extensions-and-premium/extensions/extensions' }], children: [
          { name: 'Adblock Plus', url: 'https://adblockplus.org/', platforms: ['browser'], links: [{ type: 'gitlab', url: 'https://gitlab.com/eyeo/browser-extensions-and-premium/extensions/extensions' }] },
        ]},
        { name: 'uBlock Origin', url: 'https://ublockorigin.com/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/gorhill/uBlock' }] },
        { name: 'SponsorBlock', url: 'https://sponsor.ajay.app/', desc: '跳过 YouTube 广告', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/ajayyy/SponsorBlock' }] },
        { name: 'AdAway', url: 'https://adaway.org/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/AdAway/AdAway' }] },
      ],
    },
    {
      title: { zh: '应用商店', en: 'App stores' },
      id: 'app-stores',
      items: [
        { name: 'GitHub Store', url: 'https://github-store.org/', links: [{ type: 'github', url: 'https://github.com/OpenHub-Store/Github-Store' }] },
        { name: 'Mas', url: 'https://github.com/mas-cli/mas', desc: 'Mac Apple Store', platforms: ['apple'] },
        { name: 'F-Droid', url: 'https://f-droid.org/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/f-droid/fdroidclient' }], children: [
          { name: 'Droid-ify', url: 'https://droidify.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/Droid-ify/client' }] },
          { name: 'Neo Store', url: 'https://github.com/NeoApplications/Neo-Store', platforms: ['android'] },
        ]},
        { name: 'Aurora', url: 'https://auroraoss.com/', desc: 'Google Play Store alternatives', platforms: ['android'], links: [{ type: 'gitlab', url: 'https://gitlab.com/AuroraOSS/AuroraStore' }] },
        { name: 'Pi-Apps', url: 'https://pi-apps.io/', desc: 'Raspberry Pi', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/Botspot/pi-apps' }] },
        { name: 'OpenStore', url: 'https://next.open-store.io/', desc: 'Ubuntu Touch', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.com/theopenstore/openstore' }] },
      ],
      subsections: [
        {
          title: { zh: '软件更新工具', en: 'Software updaters' },
          id: 'software-updaters',
          items: [
            { name: 'Obtainium', url: 'https://obtainium.imranr.dev/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/ImranR98/Obtainium/' }], children: [
              { name: 'Discoverium', url: 'https://github.com/cygnusx-1-org/Discoverium/', platforms: ['android'] },
            ]},
            { name: 'Latest', url: 'https://max.codes/latest/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/mangerlahn/Latest' }] },
            { name: 'APKUpdater', url: 'https://github.com/rumboalla/apkupdater', platforms: ['android'] },
            { name: 'UpgradeAll', url: 'https://up-a.org/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/DUpdateSystem/UpgradeAll' }] },
            { name: 'Application Manager', url: 'https://portable-linux-apps.github.io/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/ivan-hc/AM' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '验证码识别工具', en: 'Captcha solvers' },
      id: 'captcha-solvers',
      items: [
        { name: 'Buster', url: 'https://github.com/dessant/buster', platforms: ['browser'] },
        { name: 'NopeCHA', url: 'https://nopecha.com/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/NopeCHALLC/nopecha-extension' }] },
      ],
    },
    {
      title: { zh: '下载管理器', en: 'Download managers' },
      id: 'download-managers',
      items: [
        { name: 'JDownloader', url: 'https://jdownloader.org/' },
        { name: 'Motrix', url: 'https://motrix.app/', links: [{ type: 'github', url: 'https://github.com/agalwood/Motrix' }], children: [
          { name: 'Motrix Next', url: 'https://motrix-next.pages.dev/', links: [{ type: 'github', url: 'https://github.com/AnInsomniacy/motrix-next' }] },
        ]},
        { name: 'aria2', url: 'https://aria2.github.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/aria2/aria2' }], children: [
          { name: 'AriaNg', url: 'http://ariang.mayswind.net/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/mayswind/AriaNg' }] },
          { name: 'AriaNg Native', url: 'https://ariang.mayswind.net/', links: [{ type: 'github', url: 'https://github.com/mayswind/AriaNg-Native' }] },
        ]},
        { name: 'Gopeed', url: 'https://gopeed.com/', links: [{ type: 'github', url: 'https://github.com/GopeedLab/gopeed' }] },
        { name: 'AB Download Manager', url: 'https://abdownloadmanager.com/', links: [{ type: 'github', url: 'https://github.com/amir1376/ab-download-manager' }] },
      ],
    },
    {
      title: { zh: '文件传输软件', en: 'File transfer software' },
      id: 'file-transfer-software',
      subsections: [
        {
          title: { zh: 'FTP 客户端', en: 'FTP clients' },
          id: 'ftp-clients',
          items: [
            { name: 'FileZilla', url: 'https://filezilla-project.org/' },
            { name: 'File Centipede', url: 'https://filecxx.com/', links: [{ type: 'github', url: 'https://github.com/filecxx/FileCentipede' }] },
            { name: 'Cyberduck', url: 'https://cyberduck.io/', links: [{ type: 'github', url: 'https://github.com/iterate-ch/cyberduck' }] },
            { name: 'WinSCP', url: 'https://winscp.net/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/winscp/winscp' }] },
            { name: 'Termscp', url: 'https://termscp.veeso.dev/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/veeso/termscp' }] },
          ],
        },
        {
          title: { zh: '局域网文件传输工具', en: 'LAN file transfer software' },
          id: 'lan-file-transfer-software',
          items: [
            { name: 'LocalSend', url: 'https://localsend.org/', links: [{ type: 'github', url: 'https://github.com/localsend/localsend' }] },
            { name: 'Croc', url: 'https://infinitedigits.co/croc/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/schollz/croc' }] },
            { name: 'AltSendme', url: 'https://www.altsendme.com/', links: [{ type: 'github', url: 'https://github.com/tonyantony300/alt-sendme' }] },
            { name: 'Flying Carpet', url: 'https://github.com/spieglt/FlyingCarpet' },
            { name: 'File Transfer', url: 'https://transfer.52python.cn/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/MatrixSeven/file-transfer-go' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '智能家居软件', en: 'Home automation software' },
      id: 'home-automation-software',
      items: [
        { name: 'Home Assistant', url: 'https://www.home-assistant.io/', links: [{ type: 'github', url: 'https://github.com/home-assistant' }] },
        { name: 'openHAB', url: 'https://www.openhab.org/', links: [{ type: 'github', url: 'https://github.com/openhab' }] },
        { name: 'Gladys Assistant', url: 'https://gladysassistant.com/', links: [{ type: 'github', url: 'https://github.com/GladysAssistant/Gladys' }] },
        { name: 'FastBee', url: 'https://fastbee.cn/', links: [{ type: 'github', url: 'https://github.com/kerwincui/FastBee' }] },
        { name: 'ioBroker', url: 'https://www.iobroker.net/', links: [{ type: 'github', url: 'https://github.com/ioBroker/ioBroker' }] },
      ],
    },
    {
      title: { zh: '代理软件', en: 'Proxy software' },
      id: 'proxy-software',
      items: [
        { name: 'Mihomo', url: 'https://wiki.metacubex.one/', links: [{ type: 'indexes', url: 'https://wiki.metacubex.one/startup/client/client/' }, { type: 'github', url: 'https://github.com/MetaCubeX/mihomo' }], children: [
          { name: 'Clash Verge Rev', url: 'https://www.clashverge.dev/', links: [{ type: 'github', url: 'https://github.com/clash-verge-rev/clash-verge-rev' }] },
          { name: 'FlClash', url: 'https://github.com/chen08209/FlClash' },
          { name: 'Clash Nyanpasu', url: 'https://nyanpasu.org/', links: [{ type: 'github', url: 'https://github.com/libnyanpasu/clash-nyanpasu' }] },
        ]},
        { name: 'V2Ray', url: 'https://www.v2fly.org/', links: [{ type: 'indexes', url: 'https://www.v2fly.org/en_US/awesome/tools.html' }, { type: 'github', url: 'https://github.com/v2fly' }], children: [
          { name: 'v2rayN', url: 'https://v2rayn.2dust.link/', links: [{ type: 'github', url: 'https://github.com/2dust/v2rayN' }] },
          { name: 'v2rayA', url: 'https://v2raya.org/', links: [{ type: 'github', url: 'https://github.com/v2rayA/v2rayA' }] },
        ]},
        { name: 'Xray', url: 'https://xtls.github.io/', links: [{ type: 'indexes', url: 'https://xtls.github.io/en/document/install.html#third-party-graphical-clients' }, { type: 'github', url: 'https://github.com/XTLS/Xray-core' }], children: [
          { name: 'v2rayNG', url: 'https://v2rayng.2dust.link/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/2dust/v2rayNG' }] },
          { name: 'V2rayU', url: 'https://github.com/yanue/V2rayU' },
        ]},
        { name: 'Hysteria', url: 'https://v2.hysteria.network/', links: [{ type: 'indexes', url: 'https://v2.hysteria.network/docs/getting-started/3rd-party-apps/' }, { type: 'github', url: 'https://github.com/apernet/hysteria' }], children: [
          { name: 'Clash Meta for Android', url: 'https://github.com/MetaCubeX/ClashMetaForAndroid', platforms: ['android'] },
          { name: 'Sing-box', url: 'https://sing-box.sagernet.org/', links: [{ type: 'github', url: 'https://github.com/SagerNet/sing-box' }] },
          { name: 'Hiddify', url: 'https://hiddify.com/', links: [{ type: 'github', url: 'https://github.com/hiddify/hiddify-app' }] },
          { name: 'NekoBox for Android', url: 'https://matsuridayo.github.io/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/MatsuriDayo/NekoBoxForAndroid' }] },
        ]},
        { name: 'Shadowsocks', url: 'https://shadowsocks.org/', links: [{ type: 'indexes', url: 'https://shadowsocks.org/doc/getting-started.html#gui-clients' }, { type: 'github', url: 'https://github.com/shadowsocks' }], children: [
          { name: 'Shadowsocks for Android', url: 'https://github.com/shadowsocks/shadowsocks-android', platforms: ['android'] },
        ]},
      ],
    },
    {
      title: { zh: '远程管理软件', en: 'Remote administration software' },
      id: 'remote-administration-software',
      subsections: [
        {
          title: { zh: '远程桌面软件', en: 'Remote desktop software' },
          id: 'remote-desktop-software',
          items: [
            { name: 'RustDesk', url: 'https://rustdesk.com/', links: [{ type: 'github', url: 'https://github.com/rustdesk/rustdesk' }] },
            { name: 'TightVNC', url: 'https://www.tightvnc.com/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/vnc-tight/' }] },
            { name: 'FreeRDP', url: 'https://www.freerdp.com/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/FreeRDP/FreeRDP' }], children: [
              { name: 'Remmina', url: 'https://remmina.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/freerdp/remmina' }] },
            ]},
            { name: 'HopToDesk', url: 'https://www.hoptodesk.com/', links: [{ type: 'gitlab', url: 'https://gitlab.com/hoptodesk/hoptodesk' }] },
            { name: 'BilldDesk', url: 'https://desk.hsslive.cn/', links: [{ type: 'github', url: 'https://github.com/galaxy-s10/billd-desk' }] },
            { name: '1Remote', url: 'https://1remote.github.io/', links: [{ type: 'github', url: 'https://github.com/1Remote/1Remote' }] },
            { name: 'CrossDesk', url: 'https://www.crossdesk.cn/', links: [{ type: 'github', url: 'https://github.com/kunkundi/crossdesk' }] },
          ],
        },
        {
          title: { zh: '投屏软件', en: 'Screen mirroring' },
          id: 'screen-mirroring',
          items: [
            { name: 'Scrcpy', url: 'https://github.com/genymobile/scrcpy', platforms: ['cli'], children: [
              { name: 'QtScrcpy', url: 'https://github.com/barry-ran/qtscrcpy' },
              { name: 'Escrcpy', url: 'https://viarotel.eu.org/', links: [{ type: 'github', url: 'https://github.com/viarotel-org/escrcpy' }] },
            ]},
            { name: 'Weylus', url: 'https://github.com/H-M-H/Weylus' },
            { name: 'PlainApp', url: 'https://plainapp.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/plainhub/plain-app' }] },
            { name: 'ScreenStream', url: 'https://screenstream.io/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/dkrivoruchko/ScreenStream' }] },
          ],
        },
      ],
    },
    {
      title: { zh: 'RSS 阅读器', en: 'RSS readers' },
      id: 'rss-readers',
      items: [
        { name: 'Folo', url: 'https://folo.is/', links: [{ type: 'github', url: 'https://github.com/RSSNext/folo' }] },
        { name: 'Glance', url: 'https://github.com/glanceapp/glance', platforms: ['cli'] },
        { name: 'NetNewsWire', url: 'https://netnewswire.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/Ranchero-Software/NetNewsWire/' }] },
        { name: 'Fluent Reader', url: 'https://hyliu.me/fluent-reader/', links: [{ type: 'github', url: 'https://github.com/yang991178/fluent-reader' }] },
      ],
    },
    {
      title: { zh: '网页浏览器', en: 'Web browsers' },
      id: 'web-browsers',
      items: [
        { name: 'Ladybird', url: 'https://ladybird.org/', links: [{ type: 'github', url: 'https://github.com/LadybirdBrowser/ladybird' }] },
        { name: 'Nyxt', url: 'https://nyxt-browser.com/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/atlas-engineer/nyxt' }] },
      ],
      subsections: [
        {
          title: { zh: 'Chromium', en: 'Chromium' },
          id: 'chromium',
          items: [
            { name: 'Brave', url: 'https://brave.com/', links: [{ type: 'github', url: 'https://github.com/brave/brave-browser' }] },
            { name: 'Helium', url: 'https://helium.computer/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/imputnet/helium' }] },
          ],
        },
        {
          title: { zh: 'Gecko', en: 'Gecko' },
          id: 'gecko',
          items: [
            { name: 'Firefox', url: 'https://www.firefox.com/', links: [{ type: 'github', url: 'https://github.com/mozilla-firefox/firefox' }] },
            { name: 'Zen Browser', url: 'https://zen-browser.app/', links: [{ type: 'github', url: 'https://github.com/zen-browser/desktop' }] },
            { name: 'Waterfox', url: 'https://www.waterfox.com/', links: [{ type: 'github', url: 'https://github.com/BrowserWorks/waterfox' }] },
            { name: 'LibreWolf', url: 'https://librewolf.net/' },
            { name: 'Pale Moon', url: 'https://www.palemoon.org/' },
          ],
        },
      ],
    },
  ],
}
