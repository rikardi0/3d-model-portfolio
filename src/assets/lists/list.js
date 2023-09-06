import imagesDron from "../img/dron/index.js";
import imagesCamera from "../img/camera/indexCamera.js";
import imagesBicycle from "../img/bicicleta/indexBicycle.js";
import imagesGeneva from "../img/geneva/indexGeneva.js";

const portfoliolist = [
  {
    path: imagesDron.dronPortada,
    alt: "Dron",
    color: "#f5f5f5",
    link: "/Dron-model",

    imagesSlide: [
      {
        path: imagesDron.dron,
      },
      {
        path: imagesDron.dronExplode,
      },
      {
        path: imagesDron.estructura,
      },
      {
        path: imagesDron.motor,
      },
    ],
  },
  {
    path: imagesCamera.camaraPortada,
    alt: "DSLR Camera",
    color: "#f5f5f5",
    link: "/Camera-model",

    imagesSlide: [
      {
        path: imagesCamera.camara,
      },
      {
        path: imagesCamera.desarmadoLado,
      },
      {
        path: imagesCamera.frente,
      },

      {
        path: imagesCamera.lente,
      },
    ],
  },

  {
    path: imagesGeneva.genevaDrive,
    alt: "Geneva Drive",
    color: "#f5f5f5",
    link: "/Geneva-drive-model",

    imagesSlide: [
      {
        path: imagesGeneva.genevaDriveGif,
      },
      {
        path: imagesGeneva.base,
      },
      {
        path: imagesGeneva.drive,
      },
      {
        path: imagesGeneva.driven,
      },
    ],
  },
  {
    path: imagesBicycle.bicicletaPortada,
    alt: "Bicycle",
    color: "#f5f5f5",
    link: "/Bicycle-model",

    imagesSlide: [
      {
        path: imagesBicycle.bicicleta,
      },
      {
        path: imagesBicycle.explode,
      },
      {
        path: imagesBicycle.freno,
      },
      {
        path: imagesBicycle.ruedaBicicleta,
      },
    ],
  },
];

export default portfoliolist;
