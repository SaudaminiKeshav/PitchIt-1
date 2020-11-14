import React from "react";
import Milestones from "./Milestones";

function firstTripCreated() {
    return <>
        <div className="w3-container w3-card-4" >
            <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
                {/* <img src={} alt=" " style={{ width: "100%", height: "750%" }} */}
                {/* ></img> */}
            </div>
        </div></>;
}

function milestones3(){
    return <>
    <div className="w3-container w3-card-4" >
        <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
            {/* <img src={} alt=" " style={{ width: "100%", height: "750%" }} */}
            {/* ></img> */}
        </div>
    </div></>;
}

function milestones5(){
    return <>
    <div className="w3-container w3-card-4" >
        <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
            {/* <img src={} alt=" " style={{ width: "100%", height: "750%" }} */}
            {/* ></img> */}
        </div>
    </div></>;
}

function milestones10(){
    return <>
    <div className="w3-container w3-card-4" >
        <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
            {/* <img src={} alt=" " style={{ width: "100%", height: "750%" }} */}
            {/* ></img> */}
        </div>
    </div></>;
}

const Milestones_user = (props) => {
    let totalTrips = props.trips;
    let carouselItem1 = null;
    let i;

    switch (totalTrips) {
        case 1: carouselItem1 = firstTripCreated();
            break;
        case 3: carouselItem1 = milestones3();
            break;
        case 5: carouselItem1 = milestones5();
            break;
            case 10: carouselItem2 = milestones10();
        default:
            break;
    }


    return <>
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">

                    <div className="carousel-item active w3-card-4">



                        <div className="w3-container w3-card-4" >
                            <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "200%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt=" " style={{ width: "100%", height: "750%" }} */}
                                {/* ></img> */}
                            </div>
                        </div>

                        <div className="w3-container" >
                            <div className="card" style={{ float: "left", width: "27%", height: "100px", height: "200%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="Code Quiz" style={{ width: "100%", height: "750%" }}></img> */}
                            </div>
                        </div>

                        <div className="w3-container" >
                            <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="" style={{ width: "100%", height: "750%" }}></img> */}
                            </div>
                        </div>

                    </div>

                    <div className="carousel-item">
                        <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
                            {/* <img src={} alt="" style={{ width: "100%", height: "750%", marginBottom: "10%" }}></img> */}
                        </div>


                        <div className="w3-container" >

                            <div className="card" style={{ float: "left", width: "27%", height: "25%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="" style={{ width: "100%", height: "25%" }}></img> */}
                            </div>
                        </div>
                        <div className="w3-container" >

                            <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="" style={{ width: "100%", height: "750%" }}></img> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="w3-container" >

                            <div className="card" style={{ marginBottom: "5%", float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "9%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="" style={{ width: "100%", height: "750%" }}></img> */}
                            </div>
                        </div>
                        <div className="w3-container" >

                            <div className="card" style={{ float: "left", width: "27%", height: "500%", backgroundColor: "white", marginLeft: "1%", marginTop: "10%", marginBottom: "10%" }}>
                                {/* <img src={} alt="" style={{ width: "100%", height: "750%" }}></img> */}
                            </div>
                        </div>

                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </>;
}

export default Milestones_user;