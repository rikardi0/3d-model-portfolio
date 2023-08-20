import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageSlide.css";

function ImageSlide(props) {
  let { images } = props;

  return (
    <Slide indicators={false} autoplay={false}>
      {images.map((slideImage, index) => (
        <div key={index}>
          <img
            className="img-slide"
            src={slideImage.path}
            alt="multiple images of selected projects"
          ></img>
        </div>
      ))}
    </Slide>
  );
}

export default ImageSlide;
