import React, { useState } from "react";
import Menu from "../menu/menu.js";
import Contact from "../../../components/footer/Footer.js";
import Canvas from "../../3d-model/CanvasModel.js";
import "./Details.css";

function Details(props) {
  const [element] = useState(props.element);
  const [imageLarge] = useState(props.imageLarge);
  const [imageLargeTwo] = useState(props.imageLargeTwo);
  const [imageList] = useState(props.imageList);
  const [axisX] = useState(props.axisX);
  const [axisY] = useState(props.axisY);
  const [axisZ] = useState(props.axisZ);
  const [zoom] = useState(props.zoom);
  const [verticalAdjustment] = useState(props.verticalAdjustment);

  const description =
    "Whether you're an enthusiast or a professional, this beautifully crafted model it demonstrates the impressive potential of 3D rendering, immersing viewers in a world where creativity and functionality. It's a testament to the power of modern technology and the ability to bring concepts to life with stunning visuals and intricate details.";
  return (
    <>
      <div id="black-spacer">
        <Menu />
      </div>
      <Canvas
        modelo={element}
        x={axisX}
        y={axisY}
        z={axisZ}
        verticalAdjustment={verticalAdjustment}
        zoom={zoom}
      />
      <div id="orange-spacer"></div>
      <div id="description-text">
        <div>
          <img id="large-img" src={imageLarge} alt="images"></img>
          <div className="description-content">{description}</div>
        </div>
        <div id="container-images">
          {imageList.map(function (images, index) {
            return (
              <div
                className="img-element"
                style={{
                  backgroundImage: `url("${images}")`,
                }}
              ></div>
            );
          })}
        </div>
        <img id="large-img" src={imageLargeTwo} alt="images"></img>
      </div>
      <Contact />
    </>
  );
}

export default Details;
