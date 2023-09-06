import React from "react";
import Details from "../../assets/ui/detail/Details.js";
import imageExports from "../../assets/img/bicicleta/indexBicycle.js";
import Bicicleta from "../../assets/3d-model/Bicicleta/ModeloBicicleta.js";
function BicycleDetails() {
  let imageList = [imageExports.cadena, imageExports.rear];
  const commonProps = {
    imageList,
    element: <Bicicleta />,
    imageLarge: imageExports.bicicletaLargeOne,
    imageLargeTwo: imageExports.bicicletaLargeTwo,
    axisX: 0,
    axisY: 2,
    axisZ: 10,
    zoom: window.innerWidth < 700 ? 5 : 7, // Adjust zoom based on window width
    verticalAdjustment: 0,
  };

  return <Details {...commonProps} />;
}

export default BicycleDetails;
