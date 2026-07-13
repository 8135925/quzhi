/**
 * 电子游戏软件数据
 */
export const videoGameSoftware = {
  id: 'video-game-software',
  title: { zh: '电子游戏软件', en: 'Video game software' },
  sections: [
    {
      title: { zh: '游戏启动器', en: 'Game launchers' },
      id: 'game-launchers',
      items: [
        { name: 'Starward', url: 'https://starward.scighost.com/', desc: '米哈游启动器', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Scighost/Starward' }] },
        { name: 'An Anime Game Launcher', url: 'https://github.com/an-anime-team/an-anime-game-launcher', desc: '动漫游戏启动器', platforms: ['linux'] },
      ],
      subsections: [
        {
          title: { zh: '我的世界启动器', en: 'Minecraft launchers' },
          id: 'minecraft-launchers',
          items: [
            { name: 'Prism Launcher', url: 'https://prismlauncher.org/', links: [{ type: 'github', url: 'https://github.com/PrismLauncher/PrismLauncher' }] },
            { name: 'HMCL', url: 'https://hmcl.huangyuhui.net/', links: [{ type: 'github', url: 'https://github.com/HMCL-dev/HMCL' }] },
            { name: 'Plain Craft Launcher', url: 'https://meloong.com/PCL', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Meloong-Git/PCL' }] },
            { name: 'MultiMC', url: 'https://multimc.org/', links: [{ type: 'github', url: 'https://github.com/MultiMC/Launcher/' }] },
            { name: 'Fold Craft Launcher', url: 'https://github.com/FCL-Team/FoldCraftLauncher', platforms: ['android'] },
            { name: 'PCL Community Edition', url: 'https://www.pclc.cc/projects/pcl-ce/', links: [{ type: 'github', url: 'https://github.com/PCL-Community/PCL-CE' }] },
            { name: 'Modrinth', url: 'https://modrinth.com/', links: [{ type: 'github', url: 'https://github.com/modrinth/code' }] },
            { name: 'PolyMC', url: 'https://polymc.org/', links: [{ type: 'github', url: 'https://github.com/PolyMC/PolyMC' }] },
            { name: 'XMCL', url: 'https://xmcl.app/', links: [{ type: 'github', url: 'https://github.com/voxelum/x-minecraft-launcher' }] },
            { name: 'Bedrock Launcher', url: 'https://bedrocklauncher.github.io/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/BedrockLauncher/BedrockLauncher' }] },
            { name: 'Zalith Launcher 2', url: 'https://www.zalithlauncher.cn/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/ZalithLauncher/ZalithLauncher2' }] },
            { name: 'Helios Launcher', url: 'https://github.com/dscalzi/HeliosLauncher' },
            { name: 'MCLauncher', url: 'https://github.com/MCMrARM/mc-w10-version-launcher', desc: 'Windows 10 多版本启动器', platforms: ['windows'] },
          ],
        },
        {
          title: { zh: '多游戏启动器', en: 'Multi-game launchers' },
          id: 'multi-game-launchers',
          items: [
            { name: 'Hydra Launcher', url: 'https://hydralauncher.gg/', links: [{ type: 'github', url: 'https://github.com/hydralauncher/hydra' }] },
            { name: 'Playnite', url: 'https://playnite.link/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/JosefNemec/Playnite' }] },
            { name: 'Heroic Games Launcher', url: 'https://heroicgameslauncher.com/', links: [{ type: 'github', url: 'https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher' }] },
            { name: 'Lutris', url: 'https://lutris.net/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/lutris/lutris' }] },
            { name: 'Mythic', url: 'https://getmythic.app/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/MythicApp/Mythic' }] },
            { name: 'Vnite', url: 'https://vnite.ximu.dev/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/ximu3/vnite' }] },
          ],
        },
        {
          title: { zh: 'Roblox 第三方启动器', en: 'Roblox third-party launchers' },
          id: 'roblox-third-party-launchers',
          items: [
            { name: 'Bloxstrap', url: 'https://bloxstraplabs.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/bloxstraplabs/bloxstrap' }], children: [
              { name: 'Fishstrap', url: 'https://www.fishstrap.app/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/fishstrap/fishstrap' }] },
              { name: 'Froststrap', url: 'https://froststrap.github.io/', links: [{ type: 'github', url: 'https://github.com/Froststrap/Froststrap' }] },
              { name: 'Voidstrap', url: 'https://voidstrapp.netlify.app/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/voidstrap/Voidstrap' }] },
            ]},
            { name: 'Sober', url: 'https://sober.vinegarhq.org/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/vinegarhq/sober' }] },
            { name: 'Novetus', url: 'https://bitl.itch.io/novetus', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Novetus/Novetus_src' }] },
            { name: 'AppleBlox', url: 'https://appleblox.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/AppleBlox/appleblox' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '手柄映射软件', en: 'Gamepad mappers' },
      id: 'gamepad-mappers',
      items: [
        { name: 'DS4Windows', url: 'https://ds4-windows.com/', desc: 'DualShock 3/4 和 DualSense 5', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/ds4windowsapp/DS4Windows' }] },
        { name: 'Input Remapper', url: 'https://github.com/sezanzeb/input-remapper', platforms: ['linux'] },
        { name: 'AntiMicroX', url: 'https://github.com/antimicrox/antimicrox' },
        { name: 'KeyMapper', url: 'https://keymapper.app/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/keymapperorg/KeyMapper' }] },
        { name: 'QKeyMapper', url: 'https://github.com/Zalafina/QKeyMapper', platforms: ['windows'] },
        { name: 'VirtualGamePad', url: 'https://kitswas.github.io/VirtualGamePad/', desc: 'Android 手机作为电脑游戏手柄', links: [{ type: 'github', url: 'https://github.com/kitswas/VirtualGamePad' }] },
        { name: 'ControllerBuddy', url: 'https://controllerbuddy.org/', links: [{ type: 'github', url: 'https://github.com/bwRavencl/ControllerBuddy' }] },
      ],
    },
    {
      title: { zh: '游戏工具箱', en: 'Game toolkits' },
      id: 'game-toolkits',
      items: [
        { name: 'Watt Toolkit', url: 'https://steampp.net/', desc: 'Steam 工具箱', links: [{ type: 'github', url: 'https://github.com/BeyondDimension/SteamTools' }] },
        { name: 'OpenSpeedy', url: 'https://www.fiofio.cn/en/', desc: '游戏变速器', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/game1024/OpenSpeedy' }] },
        { name: 'ShaderGlass', url: 'https://mausimus.itch.io/shaderglass', desc: 'GPU 着色器', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/mausimus/ShaderGlass' }] },
      ],
    },
    {
      title: { zh: '游戏修改器', en: 'Game trainers' },
      id: 'game-trainers',
      items: [
        { name: 'Cheat Engine', url: 'https://cheatengine.org/', links: [{ type: 'github', url: 'https://github.com/cheat-engine/cheat-engine' }] },
        { name: 'Game Cheats Manager', url: 'https://gamezonelabs.com/products/game-cheats-manager', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/dyang886/Game-Cheats-Manager' }] },
        { name: 'Bit Slicer', url: 'https://github.com/zorgiepoo/Bit-Slicer', platforms: ['apple'] },
        { name: 'Squalr', url: 'https://squalr.com/', links: [{ type: 'github', url: 'https://github.com/Squalr/Squalr' }] },
      ],
    },
    {
      title: { zh: '游戏机模拟器', en: 'Video game console emulators' },
      id: 'video-game-console-emulators',
      subsections: [
        {
          title: { zh: '街机', en: 'Arcade' },
          id: 'arcade',
          items: [
            { name: 'MAME', url: 'https://www.mamedev.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/mamedev/mame' }] },
            { name: 'FinalBurn Neo', url: 'https://github.com/finalburnneo/FBNeo' },
          ],
        },
        {
          title: { zh: '前端', en: 'Frontends' },
          id: 'frontends',
          items: [
            { name: 'RetroArch', url: 'https://www.retroarch.com/', links: [{ type: 'github', url: 'https://github.com/libretro/RetroArch' }] },
            { name: 'ES-DE Frontend', url: 'https://es-de.org/', links: [{ type: 'gitlab', url: 'https://gitlab.com/es-de/emulationstation-de' }] },
            { name: 'Pegasus Frontend', url: 'https://pegasus-frontend.org/', links: [{ type: 'github', url: 'https://github.com/mmatyas/pegasus-frontend' }] },
          ],
        },
        {
          title: { zh: '微软', en: 'Microsoft' },
          id: 'microsoft',
          items: [
            { name: 'xemu', url: 'https://xemu.app/', desc: '初代 Xbox 模拟器', links: [{ type: 'github', url: 'https://github.com/xemu-project/xemu' }] },
            { name: 'Cxbx Reloaded', url: 'https://cxbx-reloaded.co.uk/', desc: '初代 Xbox 模拟器', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/Cxbx-Reloaded/Cxbx-Reloaded-legacy' }] },
            { name: 'Xenia', url: 'https://xenia.jp/', desc: 'Xbox 360 模拟器', links: [{ type: 'github', url: 'https://github.com/xenia-project/xenia' }] },
          ],
        },
        {
          title: { zh: '多系统模拟器', en: 'Multi-system emulators' },
          id: 'multi-system-emulators',
          items: [
            { name: 'OpenEmu', url: 'https://openemu.org/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/OpenEmu/OpenEmu' }] },
            { name: 'Provenance', url: 'https://provenance-emu.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/Provenance-Emu/Provenance' }] },
            { name: 'Delta', url: 'https://faq.deltaemulator.com/', platforms: ['apple'], links: [{ type: 'github', url: 'https://github.com/rileytestut/Delta' }] },
            { name: 'Lemuroid', url: 'https://github.com/Swordfish90/Lemuroid', platforms: ['android'] },
            { name: 'BizHawk', url: 'https://tasvideos.org/BizHawk', links: [{ type: 'github', url: 'https://github.com/TASEmulators/BizHawk' }] },
            { name: 'Mesen', url: 'https://github.com/SourMesen/Mesen2' },
            { name: 'Flycast', url: 'https://github.com/flyinghead/flycast' },
            { name: 'Ares', url: 'https://ares-emu.net/', links: [{ type: 'github', url: 'https://github.com/ares-emulator/ares' }] },
            { name: 'SkyEmu', url: 'https://github.com/skylersaleh/SkyEmu', desc: 'GB, GBC, GBA and NDS 模拟器' },
          ],
        },
        {
          title: { zh: '任天堂', en: 'Nintendo' },
          id: 'nintendo',
          items: [
            { name: 'Bsnes', url: 'https://github.com/bsnes-emu/bsnes', desc: 'SNES 模拟器' },
            { name: 'Gearboy', url: 'https://github.com/drhelius/Gearboy', desc: 'GB, SGB and GBC 模拟器' },
            { name: 'Gopher64', url: 'https://loganmc10.itch.io/gopher64', desc: 'N64 模拟器', links: [{ type: 'github', url: 'https://github.com/gopher64/gopher64' }] },
            { name: 'Dolphin', url: 'https://cn.dolphin-emu.org/', desc: 'GameCube and Wii 模拟器', links: [{ type: 'github', url: 'https://github.com/dolphin-emu/dolphin' }] },
            { name: 'Cemu', url: 'https://cemu.info/', desc: 'Wii U 模拟器', links: [{ type: 'github', url: 'https://github.com/cemu-project/Cemu' }], children: [
              { name: 'Cemu Android Port', url: 'https://github.com/SSimco/Cemu', desc: 'Wii U 模拟器', platforms: ['android'] },
            ]},
            { name: 'mGBA', url: 'https://mgba.io/', desc: 'GBA 模拟器', links: [{ type: 'github', url: 'https://github.com/mgba-emu/mgba' }] },
            { name: 'SameBoy', url: 'https://sameboy.github.io/', desc: 'GB and GBC 模拟器', links: [{ type: 'github', url: 'https://github.com/LIJI32/SameBoy' }] },
            { name: 'NanoBoyAdvance', url: 'https://github.com/nba-emu/NanoBoyAdvance', desc: 'GBA 模拟器' },
            { name: 'melonDS', url: 'https://melonds.kuribo64.net/', desc: 'Nintendo DS 模拟器', links: [{ type: 'github', url: 'https://github.com/melonDS-emu/melonDS' }], children: [
              { name: 'melonDS Android port', url: 'https://github.com/rafaelvcaetano/melonDS-android', desc: 'Nintendo DS 模拟器', platforms: ['android'] },
            ]},
            { name: 'DeSmuME', url: 'http://desmume.org/', desc: 'Nintendo DS 模拟器', links: [{ type: 'github', url: 'https://github.com/TASEmulators/desmume' }] },
            { name: 'Panda3DS', url: 'https://panda3ds.com/', desc: 'Nintendo 3DS 模拟器', links: [{ type: 'github', url: 'https://github.com/wheremyfoodat/Panda3DS' }] },
          ],
        },
        {
          title: { zh: '索尼', en: 'Sony' },
          id: 'sony',
          items: [
            { name: 'shadPS4', url: 'https://shadps4.net/', desc: 'PS4 模拟器', links: [{ type: 'github', url: 'https://github.com/shadps4-emu/shadPS4' }] },
            { name: 'RPCS3', url: 'https://rpcs3.net/', desc: 'PS3 模拟器', links: [{ type: 'github', url: 'https://github.com/RPCS3/rpcs3' }] },
            { name: 'PCSX2', url: 'https://pcsx2.net/', desc: 'PS2 模拟器', links: [{ type: 'github', url: 'https://github.com/PCSX2/pcsx2' }] },
            { name: 'Play!', url: 'https://purei.org/', desc: 'PS2 模拟器', links: [{ type: 'github', url: 'https://github.com/jpd002/play-' }] },
            { name: 'NetherSX2', url: 'https://github.com/Trixarian/NetherSX2-patch', desc: 'PS2 模拟器', platforms: ['android'], children: [
              { name: 'NetherSX2 Classic', url: 'https://github.com/Trixarian/NetherSX2-classic', desc: 'PS2 模拟器', platforms: ['android'] },
            ]},
            { name: 'DuckStation', url: 'https://www.duckstation.org/', desc: 'PS1 模拟器', links: [{ type: 'github', url: 'https://github.com/stenzek/duckstation' }] },
            { name: 'Vita3K', url: 'https://vita3k.org/', desc: 'PSVita 模拟器', links: [{ type: 'github', url: 'https://github.com/Vita3K/Vita3K' }] },
          ],
        },
      ],
    },
  ],
}
