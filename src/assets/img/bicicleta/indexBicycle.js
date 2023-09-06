const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageBicycle = {
  bicicletaPortada: tryRequire("./bicicleta-main.jpg"),
  bicicleta: tryRequire("./bicicleta.png"),
  bicicletaLargeOne: tryRequire("./bicicleta-large-first.png"),
  bicicletaLargeTwo: tryRequire("./bicicleta-large-second.png"),
  ruedaBicicleta: tryRequire("./rueda.png"),
  freno: tryRequire("./freno.png"),
  frame: tryRequire("./frame.png"),
  rear: tryRequire("./descarrilador.png"),
  explode: tryRequire("./bicicleta-explode.png"),
  cadena: tryRequire("./cadena.png"),
};

export default imageBicycle;
