import React, { useState } from "react";
import List from "../../../src/assets/lists/list";
import CloseTab from "../../assets/img/CloseTab";
import "./Catalogue.css";
import ImageSlide from "../../assets/ui/slide-img/ImageSlide";

function Catalogue() {
  function renderGridElement(element, index) {
    return (
      <GridElement
        key={index}
        link={element.link}
        path={element.path}
        imagesSlide={element.imagesSlide}
      />
    );
  }

  return (
    <>
      <div id="container-catalogue">{List.map(renderGridElement)}</div>
    </>
  );
}

function GridElement(props) {
  const [showModal, setModal] = useState(false);
  if (showModal) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }

  const handleClick = () => {
    setModal(!showModal);
  };

  const { index, path, link, imagesSlide } = props; // Updated: Use imagesSlide instead of slideImage

  return (
    <>
      <div id="grid-img-container">
        <div
          id="img-container"
          onClick={handleClick}
          loading="lazy"
          style={{ backgroundImage: `url("${path}")` }}
        ></div>
      </div>
      {showModal && (
        <div id="modal-overlay">
          <div id="modal">
            <div id="close-btn" onClick={handleClick}>
              <CloseTab />
            </div>
            <ImageSlide images={imagesSlide} />
            <div id="modal-container-model">
              <a href={link} id="info-container">
                More details
                <div className="button-info"></div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Catalogue;
