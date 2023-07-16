const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  dron: tryRequire("./Dron.png") || require("./Sombra.png"),
  dronPrueba: tryRequire("./Roughness.png") || require("./Sombra.png"),
  dronRoja: tryRequire("./dron-red.jpg") || require("./Sombra.png"),
  dronExplode: tryRequire("./dron-explode.png") || require("./Sombra.png"),
  dronEstructura: tryRequire("./estructura.png") || require("./Sombra.png"),
  camaraAire: tryRequire("./camara-aire.png") || require("./Sombra.png"),
  motor: tryRequire("./motor-brush.png") || require("./Sombra.png"),
  imgLarge: tryRequire("./large-image.png") || require("./Sombra.png"),
};

export default imageExports;
