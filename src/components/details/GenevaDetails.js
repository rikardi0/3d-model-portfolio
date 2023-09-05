import React from "react";
import Details from "../../assets/ui/detail/Details.js";
import imageExports from "../../assets/img/geneva/indexGeneva.js";
import Geneva from "../../assets/3d-model/Geneva Drive/GenevaDriveModelo.js";
function GenevaDetails() {
  let imageList = [imageExports.drive, imageExports.driven];
  const commonProps = {
    imageList,
    element: <Geneva />,
    imageLarge: imageExports.genevaLargeOne,
    imageLargeTwo: imageExports.genevaLargeTwo,
    axisX: 5,
    axisY: 7,
    axisZ: 0,
    zoom: window.innerWidth < 700 ? 20 : 40, // Adjust zoom based on window width
    verticalAdjustment: 0,
  };

  return <Details {...commonProps} />;
}

export default GenevaDetails;
