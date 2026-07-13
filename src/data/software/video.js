/**
 * 视频软件数据
 */
export const videoSoftware = {
  id: 'video-software',
  title: { zh: '视频软件', en: 'Video software' },
  sections: [
    {
      title: { zh: '动画软件', en: 'Animation software' },
      id: 'animation-software',
      items: [
        { name: 'Blender', url: 'https://www.blender.org/', links: [{ type: 'github', url: 'https://github.com/blender/blender' }] },
        { name: 'OpenToonz', url: 'https://opentoonz.github.io/e/', links: [{ type: 'github', url: 'https://github.com/opentoonz/opentoonz' }] },
        { name: 'Pencil2D', url: 'https://www.pencil2d.org/', links: [{ type: 'github', url: 'https://github.com/pencil2d/pencil' }] },
        { name: 'Synfig', url: 'https://www.synfig.org/', links: [{ type: 'github', url: 'https://github.com/synfig/synfig' }] },
        { name: 'Krita', url: 'https://krita.org/', links: [{ type: 'github', url: 'https://github.com/KDE/krita' }], desc: '2D 动画功能' },
        { name: 'TupiTube', url: 'https://tupitube.com/', links: [{ type: 'github', url: 'https://github.com/xtingray/tupi' }] },
        { name: 'Enve', url: 'https://enve.org/', links: [{ type: 'github', url: 'https://github.com/MaurycyLiebner/enve' }] },
      ],
    },
    {
      title: { zh: '媒体中心', en: 'Media centers' },
      id: 'media-centers',
      items: [
        { name: 'Kodi', url: 'https://kodi.tv/', links: [{ type: 'github', url: 'https://github.com/xbmc/xbmc' }] },
        { name: 'Plex', url: 'https://www.plex.tv/' },
        { name: 'Jellyfin', url: 'https://jellyfin.org/', links: [{ type: 'github', url: 'https://github.com/jellyfin/jellyfin' }] },
        { name: 'Emby', url: 'https://emby.media/' },
      ],
    },
    {
      title: { zh: '视频编辑器', en: 'Video editors' },
      id: 'video-editors',
      items: [
        { name: 'Shotcut', url: 'https://shotcut.org/', links: [{ type: 'github', url: 'https://github.com/mltframework/shotcut' }] },
        { name: 'OpenShot', url: 'https://www.openshot.org/', links: [{ type: 'github', url: 'https://github.com/OpenShot/openshot-qt' }] },
        { name: 'Kdenlive', url: 'https://kdenlive.org/', links: [{ type: 'github', url: 'https://github.com/KDE/kdenlive' }] },
        { name: 'Pitivi', url: 'https://pitivi.org/', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/pitivi' }] },
        { name: 'Olive', url: 'https://olivevideoeditor.org/', links: [{ type: 'github', url: 'https://github.com/olive-editor/olive' }] },
        { name: 'Avidemux', url: 'https://avidemux.sourceforge.io/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/avidemux/' }] },
        { name: 'LosslessCut', url: 'https://mifi.no/losslesscut/', links: [{ type: 'github', url: 'https://github.com/mifi/lossless-cut' }] },
        { name: 'Natron', url: 'https://natrongithub.github.io/', links: [{ type: 'github', url: 'https://github.com/NatronGitHub/Natron' }] },
      ],
    },
    {
      title: { zh: '视频播放器', en: 'Video players' },
      id: 'video-players',
      items: [
        { name: 'VLC media player', url: 'https://www.videolan.org/', links: [{ type: 'gitlab', url: 'https://code.videolan.org/videolan/vlc' }] },
        { name: 'mpv', url: 'https://mpv.io/', links: [{ type: 'github', url: 'https://github.com/mpv-player/mpv' }], children: [
          { name: 'mpv.net', url: 'https://mpv.net/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/stax76/mpv.net' }] },
          { name: 'Celluloid', url: 'https://celluloid-player.github.io/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/celluloid-player/celluloid' }] },
          { name: 'IINA', url: 'https://iina.io/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/iina/iina' }] },
        ]},
        { name: 'MPC-HC', url: 'https://github.com/clsid2/mpc-hc', platforms: ['windows'], children: [
          { name: 'MPC-BE', url: 'https://sourceforge.net/projects/mpcbe/', platforms: ['windows'], links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/mpcbe/' }] },
        ]},
        { name: 'PotPlayer', url: 'https://potplayer.daum.net/', platforms: ['windows'] },
        { name: 'SMPlayer', url: 'https://www.smplayer.info/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/smplayer/' }] },
        { name: 'Dragon Player', url: 'https://apps.kde.org/dragonplayer/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/dragon' }] },
        { name: 'Totem', url: 'https://wiki.gnome.org/Apps/Videos', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/totem' }] },
      ],
    },
    {
      title: { zh: '视频转码器', en: 'Video converters' },
      id: 'video-converters',
      items: [
        { name: 'HandBrake', url: 'https://handbrake.fr/', links: [{ type: 'github', url: 'https://github.com/HandBrake/HandBrake' }] },
        { name: 'FFmpeg', url: 'https://ffmpeg.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/FFmpeg/FFmpeg' }] },
        { name: 'VidCoder', url: 'https://vidcoder.netlify.app/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/RandomEngy/VidCoder' }] },
        { name: 'WinFF', url: 'https://www.biggmatt.com/winff/', links: [{ type: 'github', url: 'https://github.com/WinFF/winff' }] },
        { name: 'QWinFF', url: 'https://qwinff.github.io/', links: [{ type: 'github', url: 'https://github.com/qwinff/qwinff' }] },
        { name: 'MystiQ', url: 'https://mystiqapp.com/', links: [{ type: 'gitlab', url: 'https://gitlab.com/mystiqapp/mystiq' }] },
        { name: 'CineEncoder', url: 'https://github.com/ItzTools/CineEncoder' },
      ],
    },
  ],
}
