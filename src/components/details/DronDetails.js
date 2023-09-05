import React from "react";
import Details from "../../assets/ui/detail/Details.js";
import imageExports from "../../assets/img/dron";
import Dron from "../../assets/3d-model/Dron/DronModel.js";
function DronDetails() {
  let imageList = [imageExports.motor, imageExports.dron];

  const commonProps = {
    imageList,
    element: <Dron />,
    imageLarge: imageExports.dronLargeOne,
    imageLargeTwo: imageExports.dronLargeTwo,
    axisX: 0,
    axisY: 2,
    axisZ: 5,
    zoom: window.innerWidth < 700 ? 18 : 25, // Adjust zoom based on window width
    verticalAdjustment: 0,
  };

  return <Details {...commonProps} />;
}

export default DronDetails;
