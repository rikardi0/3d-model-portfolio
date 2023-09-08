const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  dron: tryRequire("./Dron.webp"),
  dronLargeOne: tryRequire("./dron-large-first.webp"),
  dronLargeTwo: tryRequire("./dron-large-second.webp"),
  dronPortada: tryRequire("./dron-red.webp"),
  dronExplode: tryRequire("./dron-explode.webp"),
  estructura: tryRequire("./estructura.webp"),
  camaraAire: tryRequire("./camara-aire.webp"),
  motor: tryRequire("./motor-brush.webp"),
  sombra: tryRequire("./Sombra.webp"),
};

export default imageExports;
