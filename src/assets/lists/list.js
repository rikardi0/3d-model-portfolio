import imagesDron from "../img/dron/index.js";
import imagesCamera from "../img/camera/indexCamera.js";
import imagesBicycle from "../img/bicicleta/indexBicycle.js";
import imagesGeneva from "../img/geneva/indexGeneva.js";

const portfoliolist = [
  {
    path: imagesDron.dronRoja,
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
        path: imagesDron.dronEstructura,
      },
      {
        path: imagesDron.camaraAire,
      },
    ],
  },
  {
    path: imagesCamera.camara,
    alt: "DSLR Camera",
    color: "#f5f5f5",
    link: "/Camera-model",

    imagesSlide: [
      {
        path: imagesCamera.camaraSola,
      },
      {
        path: imagesCamera.frente,
      },
      {
        path: imagesCamera.desarmadoLado,
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
        path: imagesGeneva.genevaAngulo,
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
    path: imagesBicycle.bicicleta,
    alt: "Bicycle",
    color: "#f5f5f5",
    link: "/Bicycle-model",

    imagesSlide: [
      {
        path: imagesBicycle.explode,
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
