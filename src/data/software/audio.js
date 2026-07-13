/**
 * 音频软件数据
 */
export const audioSoftware = {
  id: 'audio-software',
  title: { zh: '音频软件', en: 'Audio software' },
  sections: [
    {
      title: { zh: '音频编辑器', en: 'Audio editors' },
      id: 'audio-editors',
      items: [
        { name: 'Audacity', url: 'https://www.audacityteam.org/', links: [{ type: 'github', url: 'https://github.com/audacity/audacity' }] },
        { name: 'Tenacity', url: 'https://tenacityaudio.org/', links: [{ type: 'github', url: 'https://github.com/tenacityteam/tenacity' }], desc: 'Audacity 分支' },
        { name: 'Ocenaudio', url: 'https://www.ocenaudio.com/' },
        { name: 'Ardour', url: 'https://ardour.org/', links: [{ type: 'github', url: 'https://github.com/Ardour/ardour' }] },
        { name: 'LMMS', url: 'https://lmms.io/', links: [{ type: 'github', url: 'https://github.com/LMMS/lmms' }] },
        { name: 'Rosegarden', url: 'https://rosegardenmusic.com/', platforms: ['linux'], links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/rosegarden/' }] },
        { name: 'Reaper', url: 'https://www.reaper.fm/' },
      ],
    },
    {
      title: { zh: 'DAW', en: 'DAW' },
      id: 'daw',
      items: [
        { name: 'Ardour', url: 'https://ardour.org/', links: [{ type: 'github', url: 'https://github.com/Ardour/ardour' }] },
        { name: 'LMMS', url: 'https://lmms.io/', links: [{ type: 'github', url: 'https://github.com/LMMS/lmms' }] },
        { name: 'Zrythm', url: 'https://www.zrythm.org/', links: [{ type: 'gitlab', url: 'https://gitlab.zrythm.org/zrythm/zrythm' }] },
        { name: 'Tracktion', url: 'https://www.tracktion.com/' },
        { name: 'Cakewalk', url: 'https://www.bandlab.com/products/cakewalk', platforms: ['windows'] },
      ],
    },
    {
      title: { zh: '音乐播放器', en: 'Music players' },
      id: 'music-players',
      items: [
        { name: 'foobar2000', url: 'https://www.foobar2000.org/', platforms: ['windows'] },
        { name: 'AIMP', url: 'https://www.aimp.ru/', platforms: ['windows'] },
        { name: 'MusicBee', url: 'https://getmusicbee.com/', platforms: ['windows'] },
        { name: 'MediaMonkey', url: 'https://www.mediamonkey.com/' },
        { name: 'Clementine', url: 'https://www.clementine-player.org/', links: [{ type: 'github', url: 'https://github.com/clementine-player/Clementine' }] },
        { name: 'Strawberry', url: 'https://www.strawberrymusicplayer.org/', links: [{ type: 'github', url: 'https://github.com/strawberrymusicplayer/strawberry' }] },
        { name: 'Rhythmbox', url: 'https://wiki.gnome.org/Apps/Rhythmbox', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/rhythmbox' }] },
        { name: 'Amarok', url: 'https://amarok.kde.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/amarok' }] },
        { name: 'Audacious', url: 'https://audacious-media-player.org/', links: [{ type: 'github', url: 'https://github.com/audacious-media-player/audacious' }] },
        { name: 'DeaDBeeF', url: 'https://deadbeef.sourceforge.io/', platforms: ['linux'], links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/deadbeef/' }] },
        { name: 'Quod Libet', url: 'https://quodlibet.readthedocs.io/', links: [{ type: 'github', url: 'https://github.com/quodlibet/quodlibet' }] },
        { name: 'Elisa', url: 'https://elisa.kde.org/', links: [{ type: 'github', url: 'https://github.com/KDE/elisa' }] },
        { name: 'Lollypop', url: 'https://wiki.gnome.org/Apps/Lollypop', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/World/lollypop' }] },
      ],
    },
    {
      title: { zh: '乐谱软件', en: 'Scorewriters' },
      id: 'scorewriters',
      items: [
        { name: 'MuseScore', url: 'https://musescore.org/', links: [{ type: 'github', url: 'https://github.com/musescore/MuseScore' }] },
        { name: 'TuxGuitar', url: 'https://tuxguitar.app/', links: [{ type: 'github', url: 'https://github.com/helge17/tuxguitar' }] },
        { name: 'LilyPond', url: 'https://lilypond.org/', links: [{ type: 'gitlab', url: 'https://gitlab.com/lilypond/lilypond' }] },
        { name: 'Denemo', url: 'https://www.denemo.org/', links: [{ type: 'gitlab', url: 'https://savannah.gnu.org/git/?group=denemo' }] },
      ],
    },
    {
      title: { zh: '音视频转换器', en: 'Audio converters' },
      id: 'audio-converters',
      items: [
        { name: 'fre:ac', url: 'https://www.freac.org/', links: [{ type: 'github', url: 'https://github.com/enzo1982/freac' }] },
        { name: 'freac', url: 'https://www.freac.org/', links: [{ type: 'github', url: 'https://github.com/enzo1982/freac' }] },
        { name: 'SoundConverter', url: 'https://soundconverter.org/', platforms: ['linux'] },
        { name: 'FFmpeg', url: 'https://ffmpeg.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/FFmpeg/FFmpeg' }] },
      ],
    },
  ],
}
