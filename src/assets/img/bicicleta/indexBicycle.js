const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageBicycle = {
  bicicleta: tryRequire("./Bicycle 4.jpg") || require("./Bicycle 4.jpg"),
};

export default imageBicycle;
