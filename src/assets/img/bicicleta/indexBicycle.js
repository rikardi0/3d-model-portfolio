const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageBicycle = {
  bicicletaPortada: tryRequire("./bicicleta-main.webp"),
  bicicleta: tryRequire("./bicicleta.webp"),
  bicicletaLargeOne: tryRequire("./bicicleta-large-first.webp"),
  bicicletaLargeTwo: tryRequire("./bicicleta-large-second.webp"),
  ruedaBicicleta: tryRequire("./rueda.webp"),
  freno: tryRequire("./freno.webp"),
  frame: tryRequire("./frame.webp"),
  rear: tryRequire("./descarrilador.webp"),
  explode: tryRequire("./bicicleta-explode.webp"),
  cadena: tryRequire("./cadena.webp"),
};

export default imageBicycle;
