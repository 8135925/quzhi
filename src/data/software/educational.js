/**
 * 教育软件数据
 */
export const educationalSoftware = {
  id: 'educational-software',
  title: { zh: '教育软件', en: 'Educational software' },
  sections: [
    {
      title: { zh: '课堂管理软件', en: 'Classroom management software' },
      id: 'classroom-management-software',
      items: [
        { name: 'Moodle', url: 'https://moodle.org/', links: [{ type: 'github', url: 'https://github.com/moodle/moodle' }] },
        { name: 'ClassIsland', url: 'https://classisland.tech/', links: [{ type: 'github', url: 'https://github.com/ClassIsland/ClassIsland' }] },
        { name: 'Veyon', url: 'https://veyon.io/', links: [{ type: 'github', url: 'https://github.com/veyon/veyon' }] },
        { name: 'Shiguangschedule', url: 'https://sgschedule.jursin.top/', platforms: ['android'], links: [{ type: 'github', url: 'https://github.com/XingHeYuZhuan/shiguangschedule' }] },
      ],
    },
    {
      title: { zh: '间隔重复软件', en: 'Spaced repetition software' },
      id: 'spaced-repetition-software',
      subsections: [
        {
          title: { zh: '闪卡软件', en: 'Flashcard software' },
          id: 'flashcard-software',
          items: [
            { name: 'Anki', url: 'https://apps.ankiweb.net/', links: [{ type: 'github', url: 'https://github.com/ankitects/anki' }] },
            { name: 'Hashcards', url: 'https://github.com/eudoxia0/hashcards', platforms: ['web'] },
            { name: 'Mnemosyne', url: 'https://mnemosyne-proj.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/mnemosyne-proj/mnemosyne' }] },
            { name: 'Repeater', url: 'https://shaankhosla.github.io/repeater/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/shaankhosla/repeater' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '语言软件', en: 'Language software' },
      id: 'language-software',
      subsections: [
        {
          title: { zh: '语法检查器', en: 'Grammar checkers' },
          id: 'grammar-checkers',
          items: [
            { name: 'LanguageTool', url: 'https://languagetool.org/', links: [{ type: 'github', url: 'https://github.com/languagetool-org/languagetool' }] },
            { name: 'Harper', url: 'https://writewithharper.com/', links: [{ type: 'github', url: 'https://github.com/automattic/harper' }] },
            { name: 'Writing Tools', url: 'https://github.com/theJayTea/WritingTools' },
            { name: 'Scramble', url: 'https://github.com/zlwaterfield/scramble', platforms: ['browser'] },
          ],
        },
        {
          title: { zh: '拼写检查工具', en: 'Spell checkers' },
          id: 'spell-checkers',
          items: [
            { name: 'Typos', url: 'https://github.com/crate-ci/typos', platforms: ['cli'] },
            { name: 'Hunspell', url: 'https://hunspell.github.io/', platforms: ['cli'], links: [{ type: 'github', url: 'https://github.com/hunspell/hunspell' }] },
            { name: 'AutoCorrect', url: 'https://huacnlee.github.io/autocorrect/', links: [{ type: 'github', url: 'https://github.com/huacnlee/autocorrect' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '语言学习软件', en: 'Language learning software' },
      id: 'language-learning-software',
      subsections: [
        {
          title: { zh: '英语学习软件', en: 'English learning software' },
          id: 'english-learning-software',
          items: [
            { name: 'Enjoy', url: 'https://enjoy.bot/', links: [{ type: 'github', url: 'https://github.com/ZuodaoTech/everyone-can-use-english' }] },
            { name: 'MuJing', url: 'https://mujingx.com/', links: [{ type: 'github', url: 'https://github.com/tangshimin/MuJing' }] },
            { name: 'LLPlayer', url: 'https://llplayer.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/umlx5h/LLPlayer' }] },
            { name: 'Immersive Language Learning Assistant', url: 'https://illa.xlike.cc/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/xiao-zaiyi/illa-helper' }] },
            { name: 'Echo Loop', url: 'https://www.echo-loop.top/', desc: '英语听说高效训练', links: [{ type: 'github', url: 'https://github.com/echo-loop/Echo-Loop' }] },
          ],
        },
        {
          title: { zh: '日语学习软件', en: 'Japanese learning software' },
          id: 'japanese-learning-software',
          items: [
            { name: 'Yomitan', url: 'https://yomitan.wiki/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/yomidevs/yomitan' }] },
            { name: 'KanaDojo', url: 'https://kanadojo.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/lingdojo/kana-dojo' }] },
            { name: 'Jidoujisho', url: 'https://github.com/arianneorpilla/jidoujisho', platforms: ['android'] },
            { name: 'Memento', url: 'https://ripose-jp.github.io/Memento/', links: [{ type: 'github', url: 'https://github.com/ripose-jp/Memento' }] },
            { name: 'Asbplayer', url: 'https://app.asbplayer.dev/', links: [{ type: 'github', url: 'https://github.com/killergerbah/asbplayer' }] },
            { name: 'Linguist', url: 'https://linguister.io/', platforms: ['browser'], links: [{ type: 'github', url: 'https://github.com/translate-tools/linguist' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '数学软件', en: 'Mathematical software' },
      id: 'mathematical-software',
      subsections: [
        {
          title: { zh: '动态几何软件', en: 'Interactive geometry software' },
          id: 'interactive-geometry-software',
          items: [
            { name: 'GeoGebra', url: 'https://www.geogebra.org/', links: [{ type: 'github', url: 'https://github.com/geogebra/geogebra' }] },
            { name: 'Kig', url: 'https://apps.kde.org/kig/', links: [{ type: 'github', url: 'https://github.com/KDE/kig' }] },
          ],
        },
        {
          title: { zh: '计算器软件', en: 'Software calculators' },
          id: 'software-calculators',
          items: [
            { name: 'Windows Calculator', url: 'https://github.com/microsoft/calculator', platforms: ['windows'] },
            { name: 'Numi', url: 'https://numi.app/', links: [{ type: 'github', url: 'https://github.com/nikolaeu/numi' }] },
            { name: 'OpenCalc', url: 'https://github.com/clementwzk/OpenCalc', platforms: ['android'] },
            { name: 'Qalculate', url: 'https://qalculate.github.io/', links: [{ type: 'github', url: 'https://github.com/Qalculate/libqalculate' }] },
            { name: 'Kalker', url: 'https://kalker.xyz/', links: [{ type: 'github', url: 'https://github.com/PaddiM8/kalker' }] },
          ],
        },
      ],
    },
    {
      title: { zh: '思维导图软件', en: 'Mind mapping software' },
      id: 'mind-mapping-software',
      items: [
        { name: 'FreeMind', url: 'https://freemind.sourceforge.io/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/freemind/' }], children: [
          { name: 'Freeplane', url: 'https://www.freeplane.org/', links: [{ type: 'github', url: 'https://github.com/freeplane/freeplane' }], desc: 'XMind, MindMeister 替代品' },
        ]},
        { name: 'SimpleMindMap', url: 'https://wanglin2.github.io/mind-map-docs/', links: [{ type: 'github', url: 'https://github.com/wanglin2/mind-map' }] },
        { name: 'WiseMapping', url: 'https://www.wisemapping.com/', links: [{ type: 'github', url: 'https://github.com/wisemapping/wisemapping-open-source/tree/main' }] },
        { name: 'Neurite', url: 'https://neurite.network/', links: [{ type: 'github', url: 'https://github.com/satellitecomponent/Neurite' }] },
        { name: 'Minder', url: 'https://appcenter.elementary.io/com.github.phase1geo.minder/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/phase1geo/Minder' }] },
        { name: 'Heimer', url: 'https://juzzlin.github.io/Heimer/', links: [{ type: 'github', url: 'https://github.com/juzzlin/Heimer' }] },
      ],
    },
    {
      title: { zh: '打字软件', en: 'Typing software' },
      id: 'typing-software',
      subsections: [
        {
          title: { zh: '英文打字练习软件', en: 'English typing practice software' },
          id: 'english-typing-practice-software',
          items: [
            { name: 'Qwerty Learner', url: 'https://qwerty.kaiyi.cool/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/RealKai42/qwerty-learner' }] },
            { name: 'Type Words', url: 'https://typewords.cc/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/zyronon/TypeWords' }] },
          ],
        },
        {
          title: { zh: '打字练习软件', en: 'Typing tutors' },
          id: 'typing-tutors',
          items: [
            { name: 'Monkeytype', url: 'https://monkeytype.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/monkeytypegame/monkeytype' }] },
            { name: 'Keybr', url: 'https://www.keybr.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/aradzie/keybr.com' }] },
            { name: 'Smassh', url: 'https://github.com/kraanzu/smassh', platforms: ['cli'] },
            { name: 'Ttyper', url: 'https://github.com/max-niederman/ttyper', platforms: ['cli'] },
            { name: 'GitType', url: 'https://github.com/unhappychoice/gittype', platforms: ['cli'] },
          ],
        },
      ],
    },
    {
      title: { zh: '白板软件', en: 'Whiteboard' },
      id: 'whiteboard',
      items: [
        { name: 'Excalidraw', url: 'https://excalidraw.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/excalidraw/excalidraw' }] },
        { name: 'Tldraw', url: 'https://www.tldraw.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/tldraw/tldraw' }] },
        { name: 'Drawnix', url: 'https://drawnix.com/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/plait-board/drawnix' }] },
        { name: 'Lorien', url: 'https://github.com/mbrlabs/Lorien' },
        { name: 'OpenBoard', url: 'https://openboard.ch/', links: [{ type: 'github', url: 'https://github.com/openboard-org/openboard' }] },
        { name: 'WBO', url: 'https://wbo.ophir.dev/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/lovasoa/whitebophir' }] },
        { name: 'DGM', url: 'https://dgm.sh/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/dgmjs/dgmjs' }] },
      ],
    },
  ],
}
