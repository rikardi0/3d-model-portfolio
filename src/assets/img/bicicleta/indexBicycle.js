const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageBicycle = {
  bicicleta: tryRequire("./Bicycle 4.jpg"),
  bicicletaSecond: tryRequire("./Bicycle 3.jpg"),
  ruedaBicicleta: tryRequire("./rueda.png"),
  freno: tryRequire("./freno.png"),
  frame: tryRequire("./frame.png"),
  rear: tryRequire("./rear.png"),
  explode: tryRequire("./explode.png"),
  cadena: tryRequire("./cadena.png"),
};

export default imageBicycle;
