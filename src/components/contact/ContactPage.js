import React from "react";
import Contact from "./Contact";
import Menu from "../../assets/ui/menu/menu.js";

export default function ContactPage() {
  return (
    <>
      <div id="head-menu" style={{ height: "70px", backgroundColor: "black" }}>
        <Menu />
      </div>
      <Contact />
    </>
  );
}
