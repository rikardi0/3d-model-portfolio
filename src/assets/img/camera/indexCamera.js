const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExportsCamera = {
  camara: tryRequire("./camera.webp"),
  camaraPortada: tryRequire("./camera-sldr.webp"),
  camaraLargeFirst: tryRequire("./camera-large-first.webp"),
  camaraLargeSecond: tryRequire("./camera-large-second.webp"),
  base: tryRequire("./base.webp"),
  desarmadoLado: tryRequire("./desarmado-lado.webp"),
  frente: tryRequire("./frente.webp"),
  lente: tryRequire("./lente.webp"),
};

export default imageExportsCamera;
