import React from "react";
import DronElement from "../../assets/3d-model/Dron/DronView";
import Details from "../../assets/ui/detail/Details.js";
function DronDetails() {
  let description = [
    {
      introduction:
        "Experience the captivating world of 3D design with this exceptional drone model that showcases meticulous craftsmanship and innovation. ",
      introductionSecond:
        " From the intricately designed propellers to the detailed frame, each component has been carefully crafted to embody authenticity and elevate the visual appeal. This model is a testament to the power of modern technology and the artistry involved in creating a realistic 3D representation.",
      description:
        "Using advanced software like SOLIDWORKS, the model's curves, contours, and angles have been thoughtfully designed to deliver a high-quality and lifelike visual experience. ",
      descriptionSecond:
        "It accurately captures the essence of a real-world drone, allowing you to appreciate the intricate design and craftsmanship behind it.",
      descriptionThird:
        "Whether you're an enthusiast or a professional, this beautifully crafted 3D model it demonstrates the impressive potential of 3D rendering, immersing viewers in a world where creativity and functionality. It's a testament to the power of modern technology and the ability to bring concepts to life with stunning visuals and intricate details..",
    },
  ];

  return <Details element={<DronElement />} description={description} />;
}

export default DronDetails;
