/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomeSlider() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="img/slides/earthnft-1.png" alt="earthnft slide 1"/>
        </div>
        <div>
          <img src="img/slides/earthnft-2.png" alt="earthnft slide 2"/>
        </div>
        <div>
          <img src="img/slides/earthnft-3.png" alt="earthnft slide 3"/>
        </div>
        <div>
          <img src="img/slides/earthnft-4.png" alt="earthnft slide 4"/>
        </div>
        <div>
          <img src="img/slides/earthnft-5.png" alt="earthnft slide 5"/>
        </div>
        <div>
          <img src="img/slides/earthnft-6.png" alt="earthnft slide 6"/>
        </div>
        <div>
          <img src="img/slides/earthnft-7.png" alt="earthnft slide 7"/>
        </div>
      </Carousel>
    </div>
  );
}
