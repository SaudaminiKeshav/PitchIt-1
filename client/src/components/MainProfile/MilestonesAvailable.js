import React from "react";
import Milestones from "./MilestonesComponent";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import ExplorerBadge from "../../img/explorer.gif";
import RookieBadge from "../../img/rookie.gif";
import SequoniaBadge from "../../img/sequoia_np.png";
import YellowstoneBadge from "../../img/yellowstone_np.png";
import YosemiteBadge from "../../img/yosemite_np.png";
import classNames from 'classnames';
import "./style.css";

const Milestones_Available = (props) => {

    const badgeStyle = {
        width: "105%",
        float: "left",
        height: "50%",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
    }

    const badgeCardStyle = {
        margin: "1%",
        width: "95%",
        height: "fit-content",
        borderRadius: "20px"
    }

    return <>
        <br></br>
        <hr></hr>
        <br></br>
        <h3 style={{ margin: "2%" }}>Available Milestone Badges</h3>
        <div className="container" style={{ width: "auto", display: "flex" }}>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={RookieBadge} alt="Avatar" style={{ width: "100%", height: "100%" }}></img>
                    </div>
                    <div class="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
            {/* 
                <div style={badgeCardStyle} >
                    <div className="card" style={badgeCardStyle}>
                        <img src={RookieBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>
                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={ExplorerBadge} alt=" " style={badgeStyle} ></img>
                    </div>
                </div>

                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={CamperBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>

                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={ExpertBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>

                <div style={badgeCardStyle} >
                    <div className="card" style={badgeCardStyle}>
                        <img src={RookieBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>
                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={ExplorerBadge} alt=" " style={badgeStyle} ></img>
                    </div>
                </div>

                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={CamperBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div>

                <div style={badgeCardStyle}>
                    <div className="card" style={badgeCardStyle}>
                        <img src={ExpertBadge} alt=" " style={badgeStyle}></img>
                    </div>
                </div> */}

        </div>
    </>;
}

export default Milestones_Available;