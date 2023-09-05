import React from "react";
import Details from "../../assets/ui/detail/Details.js";
import imageExports from "../../assets/img/camera/indexCamera.js";
import Camera from "../../assets/3d-model/Camera/CameraModel.js";
function DronDetails() {
  const imageList = [imageExports.base, imageExports.lente];
  const commonProps = {
    imageList,
    element: <Camera />,
    imageLarge: imageExports.camaraLargeFirst,
    imageLargeTwo: imageExports.camaraLargeSecond,
    axisX: 0.15,
    axisY: 0,
    axisZ: 0.5,
    zoom: window.innerWidth < 700 ? 3 : 5, // Adjust zoom based on window width
    verticalAdjustment: 0,
  };

  return <Details {...commonProps} />;
}

export default DronDetails;
