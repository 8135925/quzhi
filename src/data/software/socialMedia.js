/**
 * 社交媒体软件数据
 */
export const socialMediaSoftware = {
  id: 'social-media-software',
  title: { zh: '社交媒体软件', en: 'Social media software' },
  sections: [
    {
      title: { zh: 'Bilibili', en: 'Bilibili' },
      id: 'bilibili',
      subsections: [
        {
          title: { zh: 'Bilibili 直播工具', en: 'Bilibili live tools' },
          id: 'bilibili-live-tools',
          items: [
            { name: 'Bililive-go', url: 'https://github.com/bililive-go/bililive-go', desc: '直播录制工具' },
            { name: 'BililiveRecorder', url: 'https://rec.danmuji.org/', desc: '直播录制工具', links: [{ type: 'github', url: 'https://github.com/BililiveRecorder/BililiveRecorder' }] },
            { name: 'Blivechat', url: 'https://blive.chat/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/xfgryujk/blivechat' }] },
            { name: 'Bilibili Live Chat', url: 'https://blc.lolicon.app/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/Tsuk1ko/bilibili-live-chat' }] },
            { name: 'DDTV', url: 'https://github.com/CHKZL/DDTV' },
            { name: 'BiliBili ShadowReplay', url: 'https://bsr.xinrea.cn/', links: [{ type: 'github', url: 'https://github.com/Xinrea/bili-shadowreplay' }] },
          ],
        },
        {
          title: { zh: 'Bilibili 音乐播放器', en: 'Bilibili music players' },
          id: 'bilibili-music-players',
          items: [
            { name: 'Biu', url: 'https://github.com/wood3n/biu' },
            { name: 'Azusa Player Mobile', url: 'https://azusa-player-mobile.vercel.app/', links: [{ type: 'github', url: 'https://github.com/lovegaoshi/azusa-player-mobile' }] },
          ],
        },
        {
          title: { zh: 'Bilibili 第三方客户端', en: 'Bilibili third-party clients' },
          id: 'bilibili-third-party-clients',
          items: [
            { name: 'BBLL', url: 'https://github.com/xiaye13579/BBLL', platforms: ['android'] },
            { name: 'PiliPala', url: 'https://pilipala.life/', links: [{ type: 'github', url: 'https://github.com/guozhigq/pilipala' }], children: [
              { name: 'PiliPlus', url: 'https://github.com/bggRGjQaUbCoE/PiliPlus', platforms: ['android'] },
            ]},
            { name: 'WiliWili', url: 'https://www.xfangfang.cn/wiliwili/', links: [{ type: 'github', url: 'https://github.com/xfangfang/wiliwili' }] },
            { name: 'BiliCopilot', url: 'https://github.com/Richasy/Bili.Copilot', platforms: ['windows'] },
            { name: 'BV', url: 'https://github.com/aaa1115910/bv', platforms: ['android'] },
            { name: 'BiliPai', url: 'https://github.com/jay3-yy/BiliPai', platforms: ['android'] },
            { name: 'Bilimiao', url: 'https://10miaomiao.cn/project/bilimiao', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/10miaomiao/bilimiao2' }] },
            { name: 'Bilibili Linux', url: 'https://github.com/msojocs/bilibili-linux', platforms: ['linux'] },
            { name: 'BiliLite', url: 'https://github.com/ywmoyue/biliuwp-lite', desc: 'UWP', platforms: ['windows'] },
          ],
        },
        {
          title: { zh: 'Bilibili 视频下载工具', en: 'Bilibili video downloaders' },
          id: 'bilibili-video-downloaders',
          items: [
            { name: 'DownKyi', url: 'https://github.com/yaobiao131/downkyicore' },
            { name: 'BilibiliDown', url: 'https://nicelee.top/BilibiliDown/', links: [{ type: 'github', url: 'https://github.com/nICEnnnnnnnLee/BilibiliDown' }] },
            { name: 'Bili23 Downloader', url: 'https://bili23.scott-sloan.cn/', links: [{ type: 'github', url: 'https://github.com/ScottSloan/Bili23-Downloader' }] },
            { name: 'Bilidown', url: 'https://github.com/iuroc/bilidown' },
            { name: 'Bilibili Video Downloader', url: 'https://github.com/lanyeeee/bilibili-video-downloader' },
          ],
        },
      ],
    },
    {
      title: { zh: 'Discord', en: 'Discord' },
      id: 'discord',
      items: [
        { name: 'DiscordChatExporter', url: 'https://github.com/Tyrrrz/DiscordChatExporter' },
      ],
      subsections: [
        {
          title: { zh: 'Discord 丰富状态工具', en: 'Discord rich presence tools' },
          id: 'discord-rich-presence-tools',
          items: [
            { name: 'Music Presence', url: 'https://musicpresence.app/', links: [{ type: 'github', url: 'https://github.com/ungive/discord-music-presence' }] },
            { name: 'PreMiD', url: 'https://premid.app/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/PreMiD/PreMiD' }] },
            { name: 'Kizzy', url: 'https://kizzy.dead8309.xyz/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/dead8309/Kizzy' }] },
            { name: 'CustomRP', url: 'https://www.customrp.xyz/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/maximmax42/Discord-CustomRP' }] },
          ],
        },
        {
          title: { zh: 'Discord 第三方客户端', en: 'Discord third-party clients' },
          id: 'discord-third-party-clients',
          items: [
            { name: 'Vencord', url: 'https://vencord.dev/', links: [{ type: 'github', url: 'https://github.com/Vendicated/Vencord' }] },
            { name: 'BetterDiscord', url: 'https://betterdiscord.app/', links: [{ type: 'github', url: 'https://github.com/BetterDiscord/BetterDiscord' }] },
            { name: 'Discordo', url: 'https://github.com/ayn2op/discordo', platforms: ['cli'] },
            { name: 'Aliucord', url: 'https://github.com/Aliucord/Aliucord', platforms: ['android'] },
            { name: 'Legcord', url: 'https://legcord.app/', links: [{ type: 'github', url: 'https://github.com/legcord/legcord' }], children: [
              { name: 'GoofCord', url: 'https://github.com/Milkshiift/GoofCord' },
            ]},
            { name: 'WebCord', url: 'https://github.com/SpacingBat3/WebCord' },
            { name: 'Dorion', url: 'https://spikehd.dev/projects/dorion/', links: [{ type: 'github', url: 'https://github.com/SpikeHD/Dorion' }] },
            { name: 'Discord Messenger', url: 'https://iprogramincpp.com/discordmessenger/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/DiscordMessenger/dm' }] },
            { name: 'Abaddon', url: 'https://github.com/uowuo/abaddon' },
            { name: 'Dissent', url: 'https://github.com/diamondburned/dissent' },
            { name: 'DiscordBotClient', url: 'https://github.com/aiko-chan-ai/DiscordBotClient' },
          ],
        },
      ],
    },
    {
      title: { zh: '网易云音乐', en: 'NetEase Cloud Music' },
      id: 'netease-cloud-music',
      items: [
        { name: 'Ponymusic', url: 'https://github.com/wangchenyan/ponymusic', desc: '音乐播放器', platforms: ['android'] },
        { name: 'Musicfox', url: 'https://github.com/go-musicfox/go-musicfox', platforms: ['cli'] },
        { name: 'ZonyLrcToolsX', url: 'https://docs.myzony.com/', links: [{ type: 'github', url: 'https://github.com/real-zony/ZonyLrcToolsX' }] },
      ],
      subsections: [
        {
          title: { zh: '网易云音乐第三方客户端', en: 'NetEase Cloud Music third-party clients' },
          id: 'netease-cloud-music-third-party-clients',
          items: [
            { name: 'YesPlayMusic', url: 'https://github.com/qier222/YesPlayMusic' },
            { name: 'VutronMusic', url: 'https://github.com/stark81/VutronMusic' },
            { name: 'HyPlayer', url: 'https://hyplayer.kengwang.com.cn/', links: [{ type: 'github', url: 'https://github.com/HyPlayer/HyPlayer' }] },
          ],
        },
      ],
    },
    {
      title: { zh: 'Reddit', en: 'Reddit' },
      id: 'reddit',
      items: [
        { name: 'Reddit Enhancement Suite', url: 'https://github.com/honestbleeps/Reddit-Enhancement-Suite', desc: 'Reddit 增强套件', platforms: ['browser'] },
      ],
      subsections: [
        {
          title: { zh: 'Reddit 第三方客户端', en: 'Reddit third-party clients' },
          id: 'reddit-third-party-clients',
          items: [
            { name: 'Infinity for Reddit', url: 'https://github.com/Docile-Alligator/Infinity-For-Reddit', platforms: ['android'], children: [
              { name: 'Continuum', url: 'https://github.com/cygnusx-1-org/continuum', platforms: ['android'] },
            ]},
            { name: 'RedReader', url: 'https://github.com/QuantumBadger/RedReader', platforms: ['android'] },
            { name: 'Apollo for Reddit', url: 'https://balackburn.github.io/Apollo/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/Balackburn/Apollo' }] },
            { name: 'Reddix', url: 'https://github.com/ck-zhang/reddix', platforms: ['cli'] },
          ],
        },
      ],
    },
    {
      title: { zh: 'Spotify', en: 'Spotify' },
      id: 'spotify',
      subsections: [
        {
          title: { zh: 'Spotify 增强工具', en: 'Spotify enhancers' },
          id: 'spotify-enhancers',
          items: [
            { name: 'Spicetify', url: 'https://spicetify.app/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/spicetify/cli' }] },
            { name: 'Lyricify', url: 'https://lyricify.app/', links: [{ type: 'github', url: 'https://github.com/WXRIW/Lyricify-App' }] },
            { name: 'SLyrics', url: 'https://github.com/mantou132/Spotify-Lyrics', platforms: ['browser'] },
          ],
        },
        {
          title: { zh: 'Spotify 音乐下载器', en: 'Spotify music downloaders' },
          id: 'spotify-music-downloaders',
          items: [
            { name: 'spotDL', url: 'https://spotdl.readthedocs.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/spotDL/spotify-downloader' }] },
            { name: 'SpotiFLAC', url: 'https://github.com/spotbye/SpotiFLAC' },
          ],
        },
        {
          title: { zh: 'Spotify 歌单管理工具', en: 'Spotify playlist managers' },
          id: 'spotify-playlist-managers',
          items: [
            { name: 'Exportify', url: 'https://exportify.app/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/watsonbox/exportify' }] },
            { name: 'Spotify Dedup', url: 'https://spotify-dedup.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/JMPerez/spotify-dedup' }] },
          ],
        },
        {
          title: { zh: 'Spotify 第三方客户端', en: 'Spotify third-party clients' },
          id: 'spotify-third-party-clients',
          items: [
            { name: 'Psst', url: 'https://github.com/jpochyla/psst' },
            { name: 'Spotify Player', url: 'https://github.com/aome510/spotify-player', platforms: ['cli'] },
            { name: 'Spotify-qt', url: 'https://kraxarn.github.io/spotify-qt-nightly/', links: [{ type: 'github', url: 'https://github.com/kraxarn/spotify-qt' }] },
            { name: 'Spotatui', url: 'https://github.com/LargeModGames/spotatui', platforms: ['cli'] },
          ],
        },
      ],
    },
    {
      title: { zh: 'Telegram', en: 'Telegram' },
      id: 'telegram',
      subsections: [
        {
          title: { zh: 'Telegram 官方客户端', en: 'Telegram official clients' },
          id: 'telegram-official-clients',
          items: [
            { name: 'Telegram', url: 'https://telegram.org/', links: [{ type: 'indexes', url: 'https://telegram.org/apps#source-code' }], children: [
              { name: 'Telegram Desktop', url: 'https://desktop.telegram.org/', links: [{ type: 'github', url: 'https://github.com/telegramdesktop/tdesktop' }] },
              { name: 'Telegram for macOS', url: 'https://macos.telegram.org/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/overtake/TelegramSwift' }] },
              { name: 'Telegram for Android', url: 'https://telegram.org/android', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/DrKLO/Telegram' }] },
              { name: 'Telegram X for Android', url: 'https://github.com/TGX-Android/Telegram-X', platforms: ['android'] },
              { name: 'Telegram for iOS', url: 'https://telegram.org/dl/ios', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/TelegramMessenger/Telegram-iOS' }] },
              { name: 'Telegram WebA', url: 'https://web.telegram.org/a/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/Ajaxy/telegram-tt' }] },
              { name: 'Telegram WebK', url: 'https://web.telegram.org/k/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/morethanwords/tweb' }] },
            ]},
          ],
        },
        {
          title: { zh: 'Telegram 第三方客户端', en: 'Telegram third-party clients' },
          id: 'telegram-third-party-clients',
          items: [
            { name: 'AyuGram', url: 'https://docs.ayugram.one/', links: [{ type: 'github', url: 'https://github.com/AyuGram/AyuGramDesktop' }] },
            { name: 'Unigram', url: 'https://unigramdev.github.io/', desc: 'WinUI', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/unigramdev/unigram' }] },
            { name: 'Nekogram', url: 'https://nekogram.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/Nekogram/Nekogram' }] },
            { name: 'Nagram', url: 'https://github.com/NextAlone/Nagram', platforms: ['android'], children: [
              { name: 'Nagram X', url: 'https://github.com/risin42/NagramX', platforms: ['android'] },
            ]},
            { name: 'Cherrygram', url: 'https://github.com/arslan4k1390/Cherrygram', platforms: ['android'] },
            { name: 'Forkgram', url: 'https://github.com/forkgram/TelegramAndroid', platforms: ['android'] },
            { name: 'Materialgram', url: 'https://kukuruzka165.github.io/materialgram/', links: [{ type: 'github', url: 'https://github.com/kukuruzka165/materialgram' }] },
          ],
        },
      ],
    },
    {
      title: { zh: 'TikTok', en: 'TikTok' },
      id: 'tiktok',
      items: [
        { name: 'DouK-Downloader', url: 'https://github.com/JoeanAmier/TikTokDownloader', platforms: ['cli'] },
        { name: 'DouyinLiveRecorder', url: 'https://github.com/ihmily/DouyinLiveRecorder', desc: '抖音直播录制工具' },
      ],
    },
    {
      title: { zh: 'X/Twitter', en: 'X/Twitter' },
      id: 'x-twitter',
      items: [
        { name: 'BHTwitter', url: 'https://github.com/BandarHL/BHTwitter', desc: 'iOS 客户端增强工具', platforms: ['apple'] },
        { name: 'Control Panel for Twitter', url: 'https://github.com/insin/control-panel-for-twitter', desc: '时间线控制', platforms: ['browser'] },
        { name: 'Huntly', url: 'https://huntly.codelc.com/', desc: 'AI 信息聚合', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/lcomplete/huntly' }] },
        { name: 'Media Harvest', url: 'https://github.com/EltonChou/TwitterMediaHarvest', desc: '媒体下载工具', platforms: ['browser'] },
      ],
      subsections: [
        {
          title: { zh: 'X/Twitter 第三方客户端', en: 'X/Twitter third-party clients' },
          id: 'x-twitter-third-party-clients',
          items: [
            { name: 'Piko', url: 'https://github.com/crimera/twitter-apk', platforms: ['android'] },
            { name: 'NeoFreeBird', url: 'https://neofreebird.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/NeoFreeBird/app' }] },
            { name: 'Fritter', url: 'https://fritter.cc/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/jonjomckay/fritter' }], children: [
              { name: 'Squawker', url: 'https://github.com/j-fbriere/squawker', platforms: ['android'] },
            ]},
          ],
        },
        {
          title: { zh: 'X/Twitter UI 扩展', en: 'X/Twitter UI extension' },
          id: 'x-twitter-ui-extension',
          items: [
            { name: 'OldTwitter', url: 'https://github.com/dimdenGD/OldTwitter', platforms: ['browser'] },
            { name: 'Minimal Theme for Twitter', url: 'https://github.com/typefully/minimal-twitter', platforms: ['browser'] },
          ],
        },
      ],
    },
    {
      title: { zh: 'YouTube', en: 'YouTube' },
      id: 'youtube',
      subsections: [
        {
          title: { zh: 'YouTube 下载器', en: 'YouTube downloaders' },
          id: 'youtube-downloaders',
          items: [
            { name: 'YoutubeDownloader', url: 'https://github.com/Tyrrrz/YoutubeDownloader' },
            { name: 'ytDownloader', url: 'https://aandrew-me.github.io/ytDownloader/', links: [{ type: 'github', url: 'https://github.com/aandrew-me/ytDownloader' }] },
            { name: 'YTDLnis', url: 'https://ytdlnis.org/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/deniscerri/ytdlnis' }] },
            { name: 'Open Video Downloader', url: 'https://jely2002.github.io/youtube-dl-gui/', links: [{ type: 'github', url: 'https://github.com/jely2002/youtube-dl-gui' }] },
            { name: 'YouTube Playlist Downloader', url: 'https://github.com/shaked6540/YoutubePlaylistDownloader', platforms: ['windows'] },
            { name: 'yt-dlp-gui', url: 'https://github.com/kannagi0303/yt-dlp-gui', platforms: ['windows'] },
            { name: 'Cube YouTube Downloader', url: 'https://github.com/database64128/youtube-dl-wpf', platforms: ['windows'] },
            { name: 'YTPTube', url: 'https://github.com/arabcoders/ytptube', platforms: ['web'] },
          ],
        },
        {
          title: { zh: 'YouTube 第三方客户端', en: 'YouTube third-party clients' },
          id: 'youtube-third-party-clients',
          items: [
            { name: 'NewPipe', url: 'https://newpipe.net/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/TeamNewPipe/NewPipe/' }] },
            { name: 'SmartTube', url: 'https://smarttubeapp.github.io/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/yuliskov/SmartTube' }] },
            { name: 'FreeTube', url: 'https://libretube.dev/', links: [{ type: 'github', url: 'https://github.com/FreeTubeApp/FreeTube' }] },
            { name: 'LibreTube', url: 'https://libretube.dev/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/libre-tube/LibreTube' }] },
            { name: 'PipePipe', url: 'https://pipepipe.dev/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/InfinityLoop1308/PipePipe' }] },
            { name: 'Yattee', url: 'https://docs.yattee.stream/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/yattee/yattee' }] },
            { name: 'SkyTube', url: 'https://github.com/SkyTubeTeam/SkyTube', platforms: ['android'] },
            { name: 'YT PRO', url: 'https://prateek.is-a.dev/YTPro/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/prateek-chaubey/YTPro' }] },
            { name: 'Materialious', url: 'https://materialio.us/', links: [{ type: 'github', url: 'https://github.com/Materialious/Materialious' }] },
            { name: 'Flow', url: 'https://flow.aedev.me/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/A-EDev/Flow' }] },
            { name: 'NouTube', url: 'https://oss.nonbili.jp/noutube/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/nonbili/NouTube' }] },
          ],
        },
      ],
    },
    {
      title: { zh: 'YouTube Music', en: 'YouTube Music' },
      id: 'youtube-music',
      subsections: [
        {
          title: { zh: 'YouTube Music 第三方客户端', en: 'YouTube Music third-party clients' },
          id: 'youtube-music-third-party-clients',
          items: [
            { name: 'Pear', url: 'https://github.com/pear-devs/pear-desktop' },
            { name: 'Metrolist', url: 'https://metrolist.cc/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/MetrolistGroup/Metrolist' }] },
            { name: 'SimpMusic', url: 'https://simpmusic.org/', links: [{ type: 'github', url: 'https://github.com/maxrave-dev/SimpMusic' }] },
            { name: 'InnerTune', url: 'https://github.com/z-huang/InnerTune/', platforms: ['android'] },
            { name: 'YTMDesktop', url: 'https://ytmdesktop.github.io/', links: [{ type: 'github', url: 'https://github.com/ytmdesktop/ytmdesktop' }] },
            { name: 'Namida', url: 'https://github.com/namidaco/namida' },
            { name: 'ArchiveTune', url: 'https://archivetune.koiiverse.cloud/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/koiverse/ArchiveTune' }] },
            { name: 'OpenTune', url: 'https://github.com/Arturo254/OpenTune', platforms: ['android'] },
            { name: 'ViTune', url: 'https://vitune.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/bartoostveen/ViTune' }] },
            { name: 'Kaset', url: 'https://github.com/sozercan/kaset', platforms: ['apple'] },
            { name: 'Kreate', url: 'https://kreate.knighthat.me/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/knighthat/Kreate' }] },
            { name: 'Echo Music', url: 'https://echomusic.fun/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/EchoMusicApp/Echo-Music' }] },
            { name: 'YouTube Music for Desktop', url: 'https://youtube-music.app/', links: [{ type: 'github', url: 'https://github.com/Venipa/ytmdesktop2' }] },
          ],
        },
      ],
    },
  ],
}
