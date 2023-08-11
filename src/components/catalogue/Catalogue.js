import React, { useState } from "react";
import List from "../../../src/assets/lists/list";
import ImageSlide from "../../assets/ui/slide-img/ImageSlide.js";
import CloseTab from "../../assets/img/CloseTab";
import "./Catalogue.css";

function Catalogue() {
  const [showModal, setModal] = useState(false);
  if (showModal) {
    document.body.classList.add("active-modal-contact");
  } else {
    document.body.classList.remove("active-modal-contact");
  }
  return (
    <>
      <div id="container-catalogue">
        {List.map(function (element, index) {
          console.log(element.link);
          return (
            <>
              <div id="img-container">
                <img
                  onClick={handleClick}
                  key={index}
                  className="img-catalogue"
                  src={element.path}
                  alt={element.alt}
                  style={{ backgroundColor: element.color }}
                ></img>
              </div>
              {showModal && (
                <div id="modal-overlay">
                  <div id="modal">
                    <div id="close-btn" onClick={handleClick}>
                      <CloseTab />
                    </div>
                    <div id="modal-container-model">
                      <a href={element.link} id="info-container">
                        <div href={element.link} className="info-img">
                          ${element.link}
                        </div>

                        <div className="button-info"></div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
  function handleClick() {
    if (showModal) {
      setModal(false);
    } else {
      setModal(true);
    }
  }
}

export default Catalogue;
