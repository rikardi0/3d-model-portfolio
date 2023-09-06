const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  dron: tryRequire("./Dron.png"),
  dronLargeOne: tryRequire("./dron-large-first.png"),
  dronLargeTwo: tryRequire("./dron-large-second.jpg"),
  dronPortada: tryRequire("./dron-red.jpg"),
  dronExplode: tryRequire("./dron-explode.png"),
  estructura: tryRequire("./estructura.png"),
  camaraAire: tryRequire("./camara-aire.png"),
  motor: tryRequire("./motor-brush.png"),
  sombra: tryRequire("./Sombra.png"),
};

export default imageExports;
