import React, { Component } from "react";
import Menu from "../menu/menu.js";
import Contact from "../../../components/footer/Footer.js";
import image from "../../../assets/img/dron/index.js";
import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      element: props.element,
      description: props.description,
      direction: props.direction,
    };
  }

  render() {
    let direct = this.state.direction;
    return (
      <>
        <div id="black-spacer">
          <Menu />
        </div>
        <div>{this.state.element}</div>

        <div id="white-spacer"></div>
        <div id="orange-spacer"></div>

        <div id="description-text">
          {this.state.description.map(function (element, index) {
            return (
              <div key={index}>
                <div id="img-description" style={{ flexDirection: direct }}>
                  <img
                    className="img-column"
                    src={image.motor}
                    alt="images"
                  ></img>
                  <div>
                    <div id="introduction" className="description-content">
                      {element.introduction}
                    </div>{" "}
                    <div id="introduction" className="description-content">
                      {element.introductionSecond}
                    </div>
                  </div>
                </div>
                <div id="closer">
                  <div className="description-content">
                    {element.description}
                  </div>{" "}
                  <div className="description-content">
                    {element.descriptionSecond}
                  </div>{" "}
                  <img id="large-img" src={image.imgLarge} alt="images"></img>
                  <div className="description-content">
                    {element.descriptionThird}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Contact />
      </>
    );
  }
}

export default Details;
