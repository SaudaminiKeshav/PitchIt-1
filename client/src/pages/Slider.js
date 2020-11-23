import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../pages/Slider.scss";
import ImgComp from "./ImgComp";

function Slider() {

    let sliderArr = [
        <ImgComp src="img/gallery/gates-of-arctic.jpg" />,
        <ImgComp src="img/gallery/Arches.jpg" />,
        <ImgComp src="img/gallery/badlands.jpg" />,
        <ImgComp src="img/gallery/big-bend.jpg" />,
        <ImgComp src="img/gallery/black-canyon.jpg" />,
        <ImgComp src="img/gallery/canyonlands.jpg" />,
        <ImgComp src="img/gallery/carlsbad-caverns.jpg" />,
        <ImgComp src="img/gallery/channel-islands.jpg" />,
        <ImgComp src="img/gallery/congaree.jpg" />,
        <ImgComp src="img/gallery/crater-lake.jpg" />,
        <ImgComp src="img/gallery/cuyahoga.jpg" />,
        <ImgComp src="img/gallery/death-valley.jpg" />,
        <ImgComp src="img/gallery/denali.jpg" />,
        <ImgComp src="img/gallery/dry-tortugas.jpg" />,
        <ImgComp src="img/gallery/everglades.jpg" />,
        <ImgComp src="img/gallery/glacier-bay.jpg" />,
        <ImgComp src="img/gallery/glacier.jpg" />,
        <ImgComp src="img/gallery/grand-canyon.jpg" />,
        <ImgComp src="img/gallery/grand-tetons.JPG" />,
        <ImgComp src="img/gallery/great-smokey-mountains.jpg" />,
        <ImgComp src="img/gallery/volcanoes.jpg" />
    ];
    const [x,setX] = useState(0);
    const goLeft=()=> {
        console.log(x);
        x=== 0 ? setX(-100 *(sliderArr.length-1)) : setX(x + 100);
    };

    const goRight=()=> {
        console.log(x);
        (x=== -100 *(sliderArr.length-1))? setX(0) : setX(x - 100);
    };

        return(
        <>
            <Navbar visibility={true}/>
            <div style={{paddingTop: "1.5%", paddingLeft: "1.5%", paddingRight: "1.5%", paddingBottom: "1.5%"}}>
            </div>

                  <div className="slider">
                     {
                         sliderArr.map((item,index)=>{
                             return(
                                 <div key={index} 
                                 className="slide" 
                                 style={{transform:`translatex(${x}%)`}}
                                >
                                    {item}
                                </div>
                             );
                         })}
                    <button id="goLeft" onClick={goLeft}>
                    <i class="fas fa-chevron-left"></i>
                    </button>
                    <button id="goRight" onClick={goRight}>
                    <i class="fas fa-chevron-right"></i>
                    </button>
                  </div>

        </>
    );
}

export default Slider;


