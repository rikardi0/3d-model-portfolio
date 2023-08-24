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
  base: tryRequire("./base.png"),
  baseTOp: tryRequire("./base-top.png"),
  drive: tryRequire("./drive.png"),
  driven: tryRequire("./driven.png"),
  genevaAngulo: tryRequire("./geneva-angulo.png"),
};

export default imageExports;
