const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExportsCamera = {
  camara: tryRequire("./camera-sldr 4.jpg") || require("./camera-sldr 4.jpg"),
};

export default imageExportsCamera;
