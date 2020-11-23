import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../pages/Slider.scss";
import ImgComp from "./ImgComp";
import img1 from "img/gallery/gates-of-arctic.jpg";
import img2 from "img/gallery/Arches.jpg";
import img3 from "img/gallery/badlands.jpg";
import img4 from "img/gallery/big-bend.jpg";
import img5 from "img/gallery/black-canyon.jpg";
import img6 from "img/gallery/canyonlands.jpg";
import img7 from "img/gallery/carlsbad-caverns.jpg";
import img8 from "img/gallery/channel-islands.jpg";
import img9 from "img/gallery/congaree.jpg";
import img10 from "img/gallery/crater-lake.jpg";
import img11 from "img/gallery/cuyahoga.jpg";
import img12 from "img/gallery/death-valley.jpg";
import img13 from "img/gallery/denali.jpg";
import img14 from "img/gallery/dry-tortugas.jpg";
import img15 from "img/gallery/everglades.jpg";
import img16 from "img/gallery/glacier-bay.jpg";
import img17 from "img/gallery/glacier.jpg";
import img18 from "img/gallery/grand-canyon.jpg";
import img19 from "img/gallery/grand-tetons.JPG";
import img20 from "img/gallery/great-smokey-mountains.jpg";
import img21 from "img/gallery/volcanoes.jpg";


function Slider() {

    let sliderArr = [
        <ImgComp src={img1} />,
        <ImgComp src={img2} />,    
        <ImgComp src={img3} />,
        <ImgComp src={img4} />,
        <ImgComp src={img5} />,
        <ImgComp src={img6} />,
        <ImgComp src={img7} />,
        <ImgComp src={img8} />,
        <ImgComp src={img9} />,
        <ImgComp src={img10} />,
        <ImgComp src={img11} />,
        <ImgComp src={img12} />,
        <ImgComp src={img13} />,
        <ImgComp src={img14} />,
        <ImgComp src={img15} />,
        <ImgComp src={img16} />,
        <ImgComp src={img17} />,
        <ImgComp src={img18} />,
        <ImgComp src={img19} />,
        <ImgComp src={img20} />,
        <ImgComp src={img21} />
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


