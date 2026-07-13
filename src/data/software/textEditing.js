/**
 * 文本编辑软件数据
 */
export const textEditingSoftware = {
  id: 'text-editing-software',
  title: { zh: '文本编辑软件', en: 'Text editing software' },
  sections: [
    {
      title: { zh: '代码编辑器', en: 'Code editors' },
      id: 'code-editors',
      items: [
        { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', links: [{ type: 'github', url: 'https://github.com/microsoft/vscode' }], children: [
          { name: 'VSCodium', url: 'https://vscodium.com/', links: [{ type: 'github', url: 'https://github.com/VSCodium/vscodium' }], desc: 'VS Code 的开源版本' },
          { name: 'Cursor', url: 'https://www.cursor.com/', desc: 'AI 增强的 VS Code' },
          { name: 'Windsurf', url: 'https://windsurf.com/', desc: 'AI 编辑器', links: [{ type: 'github', url: 'https://github.com/windsurf-lang/windsurf' }] },
        ]},
        { name: 'Zed', url: 'https://zed.dev/', links: [{ type: 'github', url: 'https://github.com/zed-industries/zed' }] },
        { name: 'Lapce', url: 'https://lapce.dev/', links: [{ type: 'github', url: 'https://github.com/lapce/lapce' }] },
        { name: 'Pulsar', url: 'https://pulsar-edit.dev/', links: [{ type: 'github', url: 'https://github.com/pulsar-edit/pulsar' }], desc: 'Atom 编辑器的延续' },
      ],
    },
    {
      title: { zh: '文档编辑器', en: 'Document editors' },
      id: 'document-editors',
      items: [
        { name: 'LibreOffice', url: 'https://www.libreoffice.org/', links: [{ type: 'gitlab', url: 'https://git.libreoffice.org/core' }] },
        { name: 'OpenOffice', url: 'https://www.openoffice.org/', links: [{ type: 'github', url: 'https://github.com/apache/openoffice' }] },
        { name: 'OnlyOffice', url: 'https://www.onlyoffice.com/', links: [{ type: 'github', url: 'https://github.com/ONLYOFFICE/DocumentServer' }] },
        { name: 'WPS Office', url: 'https://www.wps.com/' },
        { name: 'Calligra', url: 'https://calligra.org/', links: [{ type: 'github', url: 'https://github.com/KDE/calligra' }] },
        { name: 'AbiWord', url: 'https://www.abisource.com/', links: [{ type: 'github', url: 'https://github.com/AbiWord/abiword' }] },
      ],
    },
    {
      title: { zh: '电子书阅读器', en: 'E-book readers' },
      id: 'e-book-readers',
      items: [
        { name: 'Calibre', url: 'https://calibre-ebook.com/', links: [{ type: 'github', url: 'https://github.com/kovidgoyal/calibre' }] },
        { name: 'Koodo Reader', url: 'https://www.koodoreader.com/', links: [{ type: 'github', url: 'https://github.com/appetizermonster/koodo-reader' }] },
        { name: 'Foliate', url: 'https://johnfactotum.github.io/foliate/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/johnfactotum/foliate' }] },
        { name: 'Thorium Reader', url: 'https://www.edrlab.org/software/thorium-reader/', links: [{ type: 'github', url: 'https://github.com/edrlab/thorium-reader' }] },
        { name: 'EasyReader', url: 'https://www.yourdolphin.com/en-gb/products/easyreader' },
        { name: 'Kiwix', url: 'https://www.kiwix.org/', links: [{ type: 'github', url: 'https://github.com/kiwix/kiwix-desktop' }] },
      ],
    },
    {
      title: { zh: '集成开发环境', en: 'Integrated development environments' },
      id: 'ides',
      items: [
        { name: 'IntelliJ IDEA Community', url: 'https://www.jetbrains.com/idea/', links: [{ type: 'github', url: 'https://github.com/JetBrains/intellij-community' }] },
        { name: 'Eclipse', url: 'https://www.eclipse.org/', links: [{ type: 'github', url: 'https://github.com/eclipse/eclipse.platform' }] },
        { name: 'Apache NetBeans', url: 'https://netbeans.apache.org/', links: [{ type: 'github', url: 'https://github.com/apache/netbeans' }] },
        { name: 'Geany', url: 'https://www.geany.org/', links: [{ type: 'github', url: 'https://github.com/geany/geany' }] },
        { name: 'Code::Blocks', url: 'https://www.codeblocks.org/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/codeblocks/' }] },
        { name: 'Spyder', url: 'https://www.spyder-ide.org/', links: [{ type: 'github', url: 'https://github.com/spyder-ide/spyder' }] },
        { name: 'RStudio', url: 'https://posit.co/products/cloud/desktop/', links: [{ type: 'github', url: 'https://github.com/rstudio/rstudio' }] },
      ],
    },
    {
      title: { zh: 'Markdown 编辑器', en: 'Markdown editors' },
      id: 'markdown-editors',
      items: [
        { name: 'MarkText', url: 'https://www.marktext.cc/', links: [{ type: 'github', url: 'https://github.com/marktext/marktext' }] },
        { name: 'Typora', url: 'https://typora.io/' },
        { name: 'Zettlr', url: 'https://www.zettlr.com/', links: [{ type: 'github', url: 'https://github.com/Zettlr/Zettlr' }] },
        { name: 'Abricotine', url: 'https://abricotine.brrd.app/', links: [{ type: 'github', url: 'https://github.com/brrd/abricotine' }] },
        { name: 'Ghostwriter', url: 'https://kde.org/applications/en/office/org.kde.ghostwriter', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/ghostwriter' }] },
        { name: 'ReText', url: 'https://github.com/retext-project/retext', platforms: ['linux'] },
      ],
    },
    {
      title: { zh: '文本编辑器', en: 'Text editors' },
      id: 'text-editors',
      items: [
        { name: 'Notepad++', url: 'https://notepad-plus-plus.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/notepad-plus-plus/notepad-plus-plus' }] },
        { name: 'Notepad Next', url: 'https://github.com/dail8859/NotepadNext', desc: 'Notepad++ 跨平台替代品' },
        { name: 'Kate', url: 'https://kate-editor.org/', links: [{ type: 'github', url: 'https://github.com/KDE/kate' }] },
        { name: 'Geany', url: 'https://www.geany.org/', links: [{ type: 'github', url: 'https://github.com/geany/geany' }] },
      ],
      subsections: [
        {
          title: { zh: '终端文本编辑器', en: 'Terminal text editors' },
          id: 'terminal-text-editors',
          items: [
            { name: 'Neovim', url: 'https://neovim.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/neovim/neovim' }], children: [
              { name: 'LazyVim', url: 'https://www.lazyvim.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/LazyVim/LazyVim' }] },
              { name: 'NvChad', url: 'https://nvchad.com/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/NvChad/NvChad' }] },
              { name: 'AstroNvim', url: 'https://astronvim.com/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/AstroNvim/AstroNvim' }] },
              { name: 'LunarVim', url: 'https://www.lunarvim.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/LunarVim/LunarVim' }] },
            ]},
            { name: 'Vim', url: 'https://www.vim.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/vim/vim' }] },
            { name: 'Emacs', url: 'https://www.gnu.org/software/emacs/', platforms: ['cli'], links: [{ type: 'gitlab', url: 'https://git.savannah.gnu.org/cgit/emacs.git' }], children: [
              { name: 'Doom Emacs', url: 'https://doomemacs.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/doomemacs/doomemacs' }] },
              { name: 'Spacemacs', url: 'https://www.spacemacs.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/syl20bnr/spacemacs' }] },
            ]},
            { name: 'Helix', url: 'https://helix-editor.com/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/helix-editor/helix' }] },
            { name: 'Kakoune', url: 'https://kakoune.org/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/mawww/kakoune' }] },
            { name: 'Micro', url: 'https://micro-editor.github.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/zyedidia/micro' }] },
            { name: 'Nano', url: 'https://www.nano-editor.org/', platforms: ['cli'], links: [{ type: 'gitlab', url: 'https://git.savannah.gnu.org/cgit/nano.git' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '翻译软件', en: 'Translation software' },
      id: 'translation-software',
      items: [
        { name: 'Pot', url: 'https://pot-app.com/', links: [{ type: 'github', url: 'https://github.com/pot-app/pot-desktop' }] },
        { name: 'TTime', url: 'https://ttime.timerecord.cn/', links: [{ type: 'github', url: 'https://github.com/InnoFang/ttime' }] },
        { name: 'OpenAI Translator', url: 'https://github.com/openai-translator/openai-translator' },
        { name: 'Lingva', url: 'https://lingva.ml/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/thedaviddelta/lingva-translate' }] },
        { name: 'Crow Translate', url: 'https://crow-translate.github.io/', links: [{ type: 'github', url: 'https://github.com/crow-translate/crow-translate' }] },
        { name: 'Linguist', url: 'https://linguistapp.github.io/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/translate-tools/linguist' }] },
        { name: 'Yomitan', url: 'https://yomitan.wiki/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/yomidevs/yomitan' }] },
        { name: 'Immersive Translate', url: 'https://immersivetranslate.com/', platforms: ['browser'] },
        { name: 'Translate Shell', url: 'https://www.soimort.org/translate-shell/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/soimort/translate-shell' }] },
      ],
    },
  ],
}
