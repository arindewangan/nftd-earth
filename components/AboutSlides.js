/* eslint-disable @next/next/no-img-element */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function AboutSlider() {
  return (
    <div>
      <Carousel>
        <div>
          <img src="img/slides/nft-2.png" alt="nft slide 1" />
        </div>
        <div>
          <img src="img/slides/nft-3.png" alt="nft slide 2"/>
        </div>
        <div>
          <img src="img/slides/nft-4.png" alt="nft slide 3"/>
        </div>
      </Carousel>
    </div>
  );
}
