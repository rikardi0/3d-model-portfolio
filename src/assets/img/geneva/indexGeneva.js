const tryRequire = (path) => {
  try {
    const image = require(`${path}`);
    return image;
  } catch (err) {
    return false;
  }
};

const imageExports = {
  genevaDrive: tryRequire("./geneva drive 6.jpg"),
};

export default imageExports;
