import React from "react";
import Navbar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Gallery() {
    return(
        <>
            <Navbar />
            <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                <p>Yo what's up, this is the gallery place holder</p>
            </div>

            <div>
                  <Carousel infiniteLoop useKeyboardArrows autoPlay interval="5000" transitionTime="5000">
                      <div>
                          <img src="img/gallery/gates-of-arctic.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/Arches.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/badlands.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/big-bend.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/black-canyon.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/bryce-canyon.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/canyonlands.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/carlsbad-caverns.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/channel-islands.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/congaree.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/crater-lake.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/cuyahoga.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/death-valley.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/denali.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/dry-tortugas.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/everglades.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/glacier-bay.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/glacier.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/grand-canyon.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/grand-tetons.JPG" />
                      </div>
                      <div>
                          <img src="img/gallery/great-smokey-mountains.jpg" />
                      </div>
                      <div>
                          <img src="img/gallery/volcanoes.jpg" />
                      </div>
                  </Carousel>
            </div>

        </>
    );
}

export default Gallery;