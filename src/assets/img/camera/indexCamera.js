const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExportsCamera = {
  camara: tryRequire("./camera-sldr 5.jpg"),
  camaraPlaya: tryRequire("./camera-sldr 2.jpg"),
  camaraSola: tryRequire("./camera-sldr.png"),
  base: tryRequire("./base.png"),
  desarmadoLado: tryRequire("./desarmado-lado.png"),
  frente: tryRequire("./frente.png"),
  lente: tryRequire("./lente.png"),
};

export default imageExportsCamera;
