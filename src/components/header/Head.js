import React from "react";
import Image from "../../assets/img/dron/Global-Ilumination.webp";
import ImageShadow from "../../assets/img/dron/Sombra.webp";
import Menu from "../../assets/ui/menu/menu";
import "./Head.css";

function Head() {
  return (
    <>
      <div id="head">
        <div id="menu">
          <Menu />
        </div>
        <div className="spacer" id="line-orange"></div>
        <img src={Image} loading="lazy" alt="3D model dron" id="dron-img"></img>
        <img
          src={ImageShadow}
          loading="lazy"
          alt="3D model dron"
          id="dron-img-shadow"
        ></img>
      </div>
      <div className="sized-box">
        <div className="triangle" id="orange-tri"></div>
        <div className="triangle" id="white-tri"></div>
        <div className="spacer" id="spacer-black"></div>
      </div>
      <div id="call-to-action">
        <span id="head-subtext2">Welcome to my 3D portofolio!</span>
        <span className="head-subtext3">
          Explore a collection of meticulously crafted models that blend
          artistry and precision, from concept to completion, I leverage the
          full potential of SOLIDWORKS® to model and render stunning 3D
          creations.
        </span>

        <span id="head-subtext4"> Explore now</span>
      </div>
    </>
  );
}

export default Head;
