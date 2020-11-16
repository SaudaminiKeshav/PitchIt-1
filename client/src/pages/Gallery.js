import React from "react";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Gallery() {
    return(
        <>
            <Navbar />
            <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                <p>Yo what's up, I still need to work on it....</p>
            </div>

            <div>
                  <Carousel infiniteLoop useKeyboardArrows autoPlay interval="5000" transitionTime="5000">
                      <div>
                          <img src="img/gallery/gates-of-arctic.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/Arches.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/badlands.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/big-bend.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/black-canyon.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/bryce-canyon.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/canyonlands.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/carlsbad-caverns.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/channel-islands.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/congaree.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/crater-lake.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/cuyahoga.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/death-valley.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/denali.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/dry-tortugas.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/everglades.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/glacier-bay.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/glacier.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/grand-canyon.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/grand-tetons.JPG" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/great-smokey-mountains.jpg" alt="" />
                      </div>
                      <div>
                          <img src="img/gallery/volcanoes.jpg" alt="" />
                      </div>
                  </Carousel>
            </div>

        </>
    );
}

export default Gallery;