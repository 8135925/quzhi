/**
 * 图形软件数据
 */
export const graphicsSoftware = {
  id: 'graphics-software',
  title: { zh: '图形软件', en: 'Graphics software' },
  sections: [
    {
      title: { zh: '3D 建模与渲染', en: '3D modeling and rendering' },
      id: '3d-modeling-and-rendering',
      items: [
        { name: 'Blender', url: 'https://www.blender.org/', links: [{ type: 'github', url: 'https://github.com/blender/blender' }] },
        { name: 'Wings 3D', url: 'http://www.wings3d.com/', links: [{ type: 'github', url: 'https://github.com/dgud/wings' }] },
        { name: 'Sweet Home 3D', url: 'https://www.sweethome3d.com/', links: [{ type: 'sourceforge', url: 'https://sourceforge.net/projects/sweethome3d/' }] },
        { name: 'FreeCAD', url: 'https://www.freecad.org/', links: [{ type: 'github', url: 'https://github.com/FreeCAD/FreeCAD' }] },
        { name: 'OpenSCAD', url: 'https://openscad.org/', links: [{ type: 'github', url: 'https://github.com/openscad/openscad' }] },
      ],
    },
    {
      title: { zh: '图像浏览器', en: 'Image viewers' },
      id: 'image-viewers',
      items: [
        { name: 'IrfanView', url: 'https://www.irfanview.com/', platforms: ['windows'] },
        { name: 'ImageGlass', url: 'https://imageglass.org/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/d2phap/ImageGlass' }] },
        { name: 'Nomacs', url: 'https://nomacs.org/', links: [{ type: 'github', url: 'https://github.com/nomacs/nomacs' }] },
        { name: 'qView', url: 'https://interversehq.com/qview/', links: [{ type: 'github', url: 'https://github.com/jurplel/qView' }] },
        { name: 'digiKam', url: 'https://www.digikam.org/', links: [{ type: 'github', url: 'https://github.com/KDE/digikam' }] },
        { name: 'Eye of GNOME', url: 'https://wiki.gnome.org/Apps/EyeOfGnome', platforms: ['linux'], links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/eog' }] },
        { name: 'Gwenview', url: 'https://apps.kde.org/gwenview/', platforms: ['linux'], links: [{ type: 'github', url: 'https://github.com/KDE/gwenview' }] },
        { name: 'FastStone Image Viewer', url: 'https://www.faststone.org/', platforms: ['windows'] },
        { name: 'XnView MP', url: 'https://www.xnview.com/en/xnviewmp/' },
        { name: 'JPEGView', url: 'https://github.com/sylikc/jpegview', platforms: ['windows'] },
      ],
    },
    {
      title: { zh: '图像编辑器', en: 'Image editors' },
      id: 'image-editors',
      items: [
        { name: 'GIMP', url: 'https://www.gimp.org/', links: [{ type: 'gitlab', url: 'https://gitlab.gnome.org/GNOME/gimp' }] },
        { name: 'Krita', url: 'https://krita.org/', links: [{ type: 'github', url: 'https://github.com/KDE/krita' }] },
        { name: 'Paint.NET', url: 'https://www.getpaint.net/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/paintdotnet/release' }] },
        { name: 'Pinta', url: 'https://www.pinta-project.com/', links: [{ type: 'github', url: 'https://github.com/PintaProject/Pinta' }] },
        { name: 'MyPaint', url: 'http://mypaint.org/', links: [{ type: 'github', url: 'https://github.com/mypaint/mypaint' }] },
        { name: 'Photopea', url: 'https://www.photopea.com/', platforms: ['web'] },
        { name: 'AzPainter', url: 'https://github.com/ptsuki/azpainter' },
      ],
    },
    {
      title: { zh: '屏幕录像机', en: 'Screen recorders' },
      id: 'screen-recorders',
      items: [
        { name: 'OBS Studio', url: 'https://obsproject.com/', links: [{ type: 'github', url: 'https://github.com/obsproject/obs-studio' }] },
        { name: 'ShareX', url: 'https://getsharex.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/ShareX/ShareX' }] },
        { name: 'SimpleScreenRecorder', url: 'https://www.maartenbaert.be/simplescreenrecorder/', platforms: ['linux'] },
        { name: 'ScreenToGif', url: 'https://www.screentogif.com/', platforms: ['windows'], links: [{ type: 'github', url: 'https://github.com/NickeManarin/ScreenToGif' }] },
      ],
    },
    {
      title: { zh: '矢量图形编辑器', en: 'Vector graphics editors' },
      id: 'vector-graphics-editors',
      items: [
        { name: 'Inkscape', url: 'https://inkscape.org/', links: [{ type: 'gitlab', url: 'https://gitlab.com/inkscape/inkscape' }] },
        { name: 'Karbon', url: 'https://apps.kde.org/karbon/', links: [{ type: 'github', url: 'https://github.com/KDE/karbon' }] },
        { name: 'Penpot', url: 'https://penpot.app/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/penpot/penpot' }] },
        { name: 'Akira', url: 'https://github.com/AkiraUX/Akira', platforms: ['linux'] },
        { name: 'SolveSpace', url: 'https://solvespace.com/', links: [{ type: 'github', url: 'https://github.com/solvespace/solvespace' }] },
        { name: 'Graphite', url: 'https://graphite.rs/', platforms: ['web'], links: [{ type: 'github', url: 'https://github.com/GraphiteEditor/Graphite' }] },
        { name: 'LaserGRBL', url: 'https://lasergrbl.com/', links: [{ type: 'github', url: 'https://github.com/arkypita/LaserGRBL' }] },
      ],
    },
    {
      title: { zh: '原画与绘画软件', en: 'Digital painting software' },
      id: 'digital-painting-software',
      items: [
        { name: 'Krita', url: 'https://krita.org/', links: [{ type: 'github', url: 'https://github.com/KDE/krita' }] },
        { name: 'MyPaint', url: 'http://mypaint.org/', links: [{ type: 'github', url: 'https://github.com/mypaint/mypaint' }] },
        { name: 'Drawpile', url: 'https://drawpile.net/', links: [{ type: 'github', url: 'https://github.com/drawpile/Drawpile' }] },
        { name: 'AzPainter', url: 'https://github.com/ptsuki/azpainter' },
        { name: 'Tux Paint', url: 'https://tuxpaint.org/', links: [{ type: 'github', url: 'https://github.com/TuxPaint-Team/tuxpaint' }] },
        { name: 'LibreDraw', url: 'https://www.libredraw.org/', platforms: ['web'] },
      ],
    },
  ],
}
