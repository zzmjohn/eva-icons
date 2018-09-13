const gm = require('gm').subClass({imageMagick: true});

class GraphicsMagickHelper {
  convertAndResize(seze, format, srcPath) {
    return gm(srcPath)
      .resize(seze, seze)
      .setFormat(format);
  }

  resize(seze, srcPath) {
    return gm(srcPath)
      .resize(seze, seze);
  }
}

module.exports = GraphicsMagickHelper;