import imagesDron from "../img/dron/index.js";
import imagesCamera from "../img/camera/indexCamera.js";
import imagesBicycle from "../img/bicicleta/indexBicycle.js";
import imagesGeneva from "../img/geneva/indexGeneva.js";

const portfoliolist = [
  {
    path: imagesDron.dronRoja,
    alt: "Dron",
    color: "#f5f5f5",
    link: "/dron-model",

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
    link: "/dron-model",

    imagesSlide: [
      {
        path: imagesDron.dron,
      },
    ],
  },

  {
    path: imagesGeneva.genevaDrive,
    alt: "Geneva Drive",
    color: "#f5f5f5",
    link: "/dron-model-cosa",

    imagesSlide: [
      {
        path: imagesBicycle.bicicleta,
      },
    ],
  },
  {
    path: imagesBicycle.bicicleta,
    alt: "Bicycle",
    color: "#f5f5f5",
    link: "/dron-model-cosa",

    imagesSlide: [
      {
        path: imagesBicycle.bicicleta,
      },
    ],
  },
];

export default portfoliolist;
