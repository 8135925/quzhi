/**
 * 生产力软件数据
 */
export const productivitySoftware = {
  id: 'productivity-software',
  title: { zh: '生产力软件', en: 'Productivity software' },
  sections: [
    {
      title: { zh: '自动化工具', en: 'Automation tools' },
      id: 'automation-tools',
      items: [
        { name: 'AutoHotkey', url: 'https://www.autohotkey.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/AutoHotkey/AutoHotkey' }], children: [
          { name: 'AutoHotkey_H', url: 'https://hotkeyit.github.io/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/hotkeyit/autohotkey' }] },
          { name: 'AutoHotkey v2', url: 'https://github.com/AutoHotkey/v2', platforms: ['windows'] },
        ]},
        { name: 'AutoKey', url: 'https://github.com/autokey/autokey', platforms: ['linux'] },
        { name: 'Hammerspoon', url: 'https://www.hammerspoon.org/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/Hammerspoon/hammerspoon' }] },
        { name: 'Keyboard Maestro', url: 'https://www.keyboardmaestro.com/main/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/keyboardmaestro/keyboardmaestro' }] },
      ],
      subsections: [
        {
          title: { zh: '按键映射软件', en: 'Key mapping software' },
          id: 'key-mapping-software',
          items: [
            { name: 'PowerToys', url: 'https://learn.microsoft.com/windows/powertoys/', desc: 'PowerToys Keyboard Manager', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/microsoft/PowerToys' }] },
            { name: 'KeyTweak', url: 'https://keytweak.com/', platforms: ['windows'] },
            { name: 'SharpKeys', url: 'https://github.com/randyrants/sharpkeys', platforms: ['windows'] },
            { name: 'Kanata', url: 'https://github.com/jtroo/kanata', desc: '跨平台键盘重映射工具', platforms: ['cli'] },
            { name: 'keyd', url: 'https://github.com/rvaiya/keyd', platforms: ['linux'] },
            { name: 'kmonad', url: 'https://github.com/kmonad/kmonad', platforms: ['cli'] },
          ],
        },
        {
          title: { zh: '热键启动器', en: 'Keystroke launchers' },
          id: 'keystroke-launchers',
          items: [
            { name: 'Flow Launcher', url: 'https://www.flowlauncher.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Flow-Launcher/Flow.Launcher' }] },
            { name: 'PowerToys Run', url: 'https://learn.microsoft.com/windows/powertoys/run', desc: 'PowerToys Run', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/microsoft/PowerToys' }] },
            { name: 'Keypirinha', url: 'https://keypirinha.com/', platforms: ['windows'] },
            { name: 'Wox', url: 'http://www.wox.one/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Wox-launcher/Wox' }] },
            { name: 'Raycast', url: 'https://www.raycast.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/raycastapp' }] },
            { name: 'Albert', url: 'https://albertlauncher.github.io/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/albertlauncher/albert' }] },
            { name: 'Ulauncher', url: 'https://ulauncher.io/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/Ulauncher/Ulauncher' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '备份软件', en: 'Backup software' },
      id: 'backup-software',
      items: [
        { name: 'FreeFileSync', url: 'https://freefilesync.org/', links: [{ type: 'github', url: 'https://github.com/paolostivanin/FreeFileSync' }] },
        { name: 'Duplicati', url: 'https://duplicati.com/', links: [{ type: 'github', url: 'https://github.com/duplicati/duplicati' }] },
        { name: 'Rustic', url: 'https://rustic.cli.rs/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/rustic-rs/rustic' }] },
        { name: 'Rclone', url: 'https://rclone.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/rclone/rclone' }], children: [
          { name: 'Rclone Browser', url: 'https://github.com/kapitainsky/RcloneBrowser' },
          { name: 'RcloneTray', url: 'https://github.com/SuddenBytes/rclonetray' },
        ]},
        { name: 'Pika Backup', url: 'https://gitlab.gnome.org/World/pika-backup', platforms: ['linux'] },
        { name: 'Kopia', url: 'https://kopia.io/', links: [{ type: 'github', url: 'https://github.com/kopia/kopia' }] },
      ],
    },
    {
      title: { zh: '剪贴板管理软件', en: 'Clipboard managers' },
      id: 'clipboard-managers',
      items: [
        { name: 'CopyQ', url: 'https://hluk.github.io/CopyQ/', links: [{ type: 'github', url: 'https://github.com/hluk/CopyQ' }] },
        { name: 'ClipboardFusion', url: 'https://www.clipboardfusion.com/', platforms: ['windows'] },
        { name: 'Ditto', url: 'https://ditto-cp.sourceforge.io/', platforms: ['windows'], links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/ditto-cp/' }] },
        { name: 'Windows Snipping Tool', url: 'https://support.microsoft.com/en-us/windows/use-snipping-tool-to-capture-screenshots-00246869-1843-655f-f220-97299b865f6b', desc: 'Windows 10/11 自带', platforms: ['windows'] },
        { name: 'Maccy', url: 'https://maccy.app/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/p0deje/Maccy' }] },
        { name: 'Clipboard', url: 'https://github.com/Slackadays/Clipboard', platforms: ['cli'] },
        { name: 'Clipboard Project', url: 'https://github.com/Slackadays/Clipboard', platforms: ['cli'] },
      ],
    },
    {
      title: { zh: '文件管理器', en: 'File managers' },
      id: 'file-managers',
      items: [
        { name: 'Files', url: 'https://files.community/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/files-community/Files' }] },
        { name: 'Total Commander', url: 'https://www.ghisler.com/', platforms: ['windows'] },
        { name: 'Double Commander', url: 'https://doublecmd.sourceforge.io/', links: [{ type: 'github', url: 'https://github.com/doublecmd/doublecmd' }] },
        { name: 'OneCommander', url: 'https://www.onecommander.com/', platforms: ['windows'] },
        { name: 'Directory Opus', url: 'https://www.gpsoft.com.au/', platforms: ['windows'] },
        { name: 'Spacedrive', url: 'https://spacedrive.com/', links: [{ type: 'github', url: 'https://github.com/spacedriveapp/spacedrive' }] },
        { name: 'An unforeseen accident', url: 'https://www.q-dir.com/', platforms: ['windows'] },
      ],
    },
    {
      title: { zh: '文件搜索软件', en: 'File search software' },
      id: 'file-search-software',
      items: [
        { name: 'Everything', url: 'https://www.voidtools.com/', platforms: ['windows'] },
        { name: 'AnyTXT Searcher', url: 'https://anytxt.net/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/zu1k/any-txt' }] },
        { name: 'TextSeek', url: 'https://www.textseek.net/', platforms: ['windows'] },
        { name: 'DocFetcher', url: 'http://docfetcher.sourceforge.net/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/docfetcher/' }] },
        { name: 'Marta', url: 'https://marta.sh/', platforms: ['apple'] },
        { name: 'Recoll', url: 'https://www.lesbonscomptes.com/recoll/', platforms: ['linux'] },
        { name: 'Agent Ransack', url: 'https://www.mythicsoft.com/agentransack/', platforms: ['windows'] },
        { name: 'ripgrep', url: 'https://github.com/BurntSushi/ripgrep', platforms: ['cli'] },
        { name: 'fd', url: 'https://github.com/sharkdp/fd', platforms: ['cli'] },
        { name: 'fzf', url: 'https://github.com/junegunn/fzf', platforms: ['cli'] },
      ],
    },
    {
      title: { zh: '启动器', en: 'Launchers' },
      id: 'launchers',
      items: [
        { name: 'Microsoft PowerToys', url: 'https://learn.microsoft.com/windows/powertoys/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/microsoft/PowerToys' }] },
        { name: 'Rectangle', url: 'https://rectangleapp.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/rxhanson/Rectangle' }] },
        { name: 'AltTab', url: 'https://alt-tab-macos.netlify.app/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/lwouis/alt-tab-macos' }] },
        { name: 'CompizConfig', url: 'https://gitlab.com/compiz/compiz-core', platforms: ['linux'] },
      ],
    },
    {
      title: { zh: '笔记软件', en: 'Note taking software' },
      id: 'note-taking-software',
      items: [
        { name: 'Obsidian', url: 'https://obsidian.md/', links: [{ type: 'github', url: 'https://github.com/obsidianmd/obsidian-api' }] },
        { name: 'Logseq', url: 'https://logseq.com/', links: [{ type: 'github', url: 'https://github.com/logseq/logseq' }] },
        { name: 'Joplin', url: 'https://joplinapp.org/', links: [{ type: 'github', url: 'https://github.com/laurent22/joplin' }] },
        { name: 'Anytype', url: 'https://anytype.io/', links: [{ type: 'github', url: 'https://github.com/anyproto/anytype-ts' }] },
        { name: 'AppFlowy', url: 'https://www.appflowy.io/', links: [{ type: 'github', url: 'https://github.com/AppFlowy-IO/AppFlowy' }] },
        { name: 'SiYuan', url: 'https://b3log.org/siyuan/', links: [{ type: 'github', url: 'https://github.com/siyuan-note/siyuan' }] },
        { name: 'Trilium', url: 'https://github.com/zadam/trilium' },
        { name: 'RedNotebook', url: 'https://rednotebook.app/', links: [{ type: 'github', url: 'https://github.com/jendrikseipp/rednotebook' }] },
        { name: 'Zim', url: 'https://zim-wiki.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/zim-desktop-wiki/zim-desktop-wiki' }] },
      ],
      subsections: [
        {
          title: { zh: '手写笔记软件', en: 'Handwritten notes software' },
          id: 'handwritten-notes-software',
          items: [
            { name: 'Rnote', url: 'https://github.com/flxzt/rnote' },
            { name: 'Xournal++', url: 'https://xournalpp.github.io/', links: [{ type: 'github', url: 'https://github.com/xournalpp/xournalpp' }] },
            { name: 'Stylus Labs Write', url: 'https://www.styluslabs.com/', platforms: ['android'] },
          ],
        },
      ],
    },
    {
      title: { zh: 'PDF 软件', en: 'PDF software' },
      id: 'pdf-software',
      items: [
        { name: 'Sumatra PDF', url: 'https://www.sumatrapdfreader.org/free-pdf-reader', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/sumatrapdfreader/sumatrapdf' }] },
        { name: 'Okular', url: 'https://okular.kde.org/', links: [{ type: 'github', url: 'https://github.com/KDE/okular' }] },
        { name: 'Evince', url: 'https://wiki.gnome.org/Apps/Evince', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/evince' }] },
        { name: 'Zathura', url: 'https://pwmt.org/projects/zathura/', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://git.pwmt.org/pwmt/zathura' }] },
        { name: 'Sioyek', url: 'https://sioyek.info/', links: [{ type: 'github', url: 'https://github.com/ahrm/sioyek' }] },
        { name: 'PaperWM', url: 'https://github.com/paperwm/PaperWM', platforms: ['linux'] },
      ],
    },
    {
      title: { zh: '屏幕录制软件', en: 'Screen recorders' },
      id: 'screen-recorders',
      items: [
        { name: 'OBS Studio', url: 'https://obsproject.com/', links: [{ type: 'github', url: 'https://github.com/obsproject/obs-studio' }] },
        { name: 'ShareX', url: 'https://getsharex.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/ShareX/ShareX' }] },
        { name: 'SimpleScreenRecorder', url: 'https://www.maartenbaert.be/simplescreenrecorder/', platforms: ['linux'] },
        { name: 'Kazam', url: 'https://github.com/hzrm/kazam', platforms: ['linux'] },
        { name: 'Kooha', url: 'https://github.com/SeaDve/Kooha', platforms: ['linux'] },
        { name: 'Streamlabs', url: 'https://streamlabs.com/' },
        { name: 'CamStudio', url: 'https://camstudio.org/', platforms: ['windows'] },
      ],
    },
    {
      title: { zh: '截图软件', en: 'Screenshot software' },
      id: 'screenshot-software',
      items: [
        { name: 'ShareX', url: 'https://getsharex.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/ShareX/ShareX' }] },
        { name: 'Flameshot', url: 'https://flameshot.org/', links: [{ type: 'github', url: 'https://github.com/flameshot-org/flameshot' }] },
        { name: 'Snipaste', url: 'https://www.snipaste.com/' },
        { name: 'Greenshot', url: 'https://getgreenshot.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/greenshot/greenshot' }] },
        { name: 'Spectacle', url: 'https://apps.kde.org/spectacle/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/spectacle' }] },
        { name: 'GNOME Screenshot', url: 'https://gitlab.gnome.org/GNOME/gnome-screenshot', platforms: ['linux'] },
      ],
    },
    {
      title: { zh: '窗口管理软件', en: 'Window managers' },
      id: 'window-managers',
      items: [
        { name: 'FancyZones', url: 'https://learn.microsoft.com/windows/powertoys/fancyzones', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/microsoft/PowerToys' }] },
        { name: 'DisplayFusion', url: 'https://www.displayfusion.com/', platforms: ['windows'] },
        { name: 'AquaSnap', url: 'https://www.nurgo-software.com/products/aquasnap', platforms: ['windows'] },
        { name: 'WindowGrid', url: 'http://windowgrid.net/', platforms: ['windows'] },
        { name: 'i3', url: 'https://i3wm.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/i3/i3' }] },
        { name: 'Sway', url: 'https://swaywm.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/swaywm/sway' }] },
        { name: 'Hyprland', url: 'https://hyprland.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/hyprwm/Hyprland' }] },
        { name: 'Yabai', url: 'https://github.com/koekeishiya/yabai', platforms: ['apple'] },
      ],
    },
  ],
}
