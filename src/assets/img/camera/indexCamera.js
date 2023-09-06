const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExportsCamera = {
  camara: tryRequire("./camera.png"),
  camaraPortada: tryRequire("./camera-sldr.jpg"),
  camaraLargeFirst: tryRequire("./camera-large-first.png"),
  camaraLargeSecond: tryRequire("./camera-large-second.png"),
  base: tryRequire("./base.png"),
  desarmadoLado: tryRequire("./desarmado-lado.png"),
  frente: tryRequire("./frente.png"),
  lente: tryRequire("./lente.png"),
};

export default imageExportsCamera;
