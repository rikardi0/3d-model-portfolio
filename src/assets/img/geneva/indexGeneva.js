const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  genevaDrive: tryRequire("./geneva-drive.jpg"),
  genevaLargeOne: tryRequire("./geneva-large-first.png"),
  genevaLargeTwo: tryRequire("./geneva-large-second.jpg"),
  genevaDriveGif: tryRequire("./geneva-drive.gif"),
  genevaAngulo: tryRequire("./geneva-45.png"),
  base: tryRequire("./base.png"),
  baseTop: tryRequire("./base-top.png"),
  drive: tryRequire("./drive.png"),
  driven: tryRequire("./driven.png"),
};

export default imageExports;
