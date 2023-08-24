import React, { useState } from "react";
import Menu from "../menu/menu.js";
import Contact from "../../../components/footer/Footer.js";
import "./Details.css";

function Details(props) {
  const [element] = useState(props.element);
  const [description] = useState(props.description);
  const [imageLarge] = useState(props.imageLarge);
  const [imageList] = useState(props.imageList);

  return (
    <>
      <div id="black-spacer">
        <Menu />
      </div>
      <div>{element}</div>
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
      </div>
      <Contact />
    </>
  );
}

export default Details;
