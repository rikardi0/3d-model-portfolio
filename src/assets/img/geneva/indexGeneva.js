const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  genevaDrive: tryRequire("./geneva-drive.webp"),
  genevaLargeOne: tryRequire("./geneva-large-first.webp"),
  genevaLargeTwo: tryRequire("./geneva-large-second.webp"),
  genevaDriveGif: tryRequire("./geneva-drive.gif"),
  genevaAngulo: tryRequire("./geneva-45.webp"),
  base: tryRequire("./base.webp"),
  baseTop: tryRequire("./base-top.webp"),
  drive: tryRequire("./drive.webp"),
  driven: tryRequire("./driven.webp"),
};

export default imageExports;
