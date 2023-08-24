import React from "react";
import Details from "../../assets/ui/detail/Details.js";
import imageExports from "../../assets/img/dron";
import Element from "../../assets/3d-model/CanvasModel";
function DronDetails() {
  let description =
    "Whether you're an enthusiast or a professional, this beautifully crafted 3D model it demonstrates the impressive potential of 3D rendering, immersing viewers in a world where creativity and functionality. It's a testament to the power of modern technology and the ability to bring concepts to life with stunning visuals and intricate details..";

  let imageList = [imageExports.motor, imageExports.dron];

  return (
    <Details
      imageList={imageList}
      element={<Element />}
      description={description}
      imageLarge={imageExports.imgLarge}
    />
  );
}

export default DronDetails;
