import React from "react";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import ExplorerBadge from "../../img/explorer.gif";
import RookieBadge from "../../img/rookie.gif";
import SequoniaBadge from "../../img/sequoia_np.png";
import YellowstoneBadge from "../../img/yellowstone_np.png";
import YosemiteBadge from "../../img/yosemite_np.png";
import "./style.css";

const Milestones_Available = (props) => {

    const badgeStyle = {
        width: "100%",
        float: "left",
        height: "50%",
        borderRadius: "20px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, .4)"
    }

    return <>
        <br></br>
        <br></br>
        <hr style={{marginLeft:"3%", marginRight:"3%"}}></hr>
        <h3 style={{ margin: "2%"}}>Available Milestone Badges</h3>
        <hr style={{marginLeft:"3%", marginRight:"3%"}}></hr>

        <div className="container" style={{ width: "auto", height: "auto", display: "flex" }}>

            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={RookieBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon completing your first trip</p>
                    </div>
                </div>
            </div>
            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={SequoniaBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon camping at the Sequoia National Park</p>
                    </div>
                </div>
            </div>

            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={YellowstoneBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon camping at the Yellow Stone National Park</p>
                    </div>
                </div>
            </div>

          

            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={CamperBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon completing 2 camping trips in a month</p>
                    </div>
                </div>
            </div>

           
        </div>

        <div className="container" style={{ width: "auto", height: "auto", display: "flex" }}>
        <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "65%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={ExpertBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon completing 10 trips</p>
                    </div>
                </div>
            </div>

            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={YosemiteBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon camping at the Yosemite National Park</p>
                    </div>
                </div>
            </div>

            <div className="flip-card" style={{ margin: "1%" }}>
                <div className="flip-card-inner" style={{ height: "75%", width: "100%", borderRadius: "20px" }}>
                    <div className="flip-card-front" style={{ height: "auto", width: "auto", borderRadius: "20px" }}>
                        <img src={ExplorerBadge} alt="Avatar" style={badgeStyle}></img>
                    </div>
                    <div className="flip-card-back">
                        <br></br>
                        <p style={{ padding: "5%" }}>Earn this badge upon completing 5 trips</p>
                    </div>
                </div>
            </div>
        </div>

        
    </>;
}

export default Milestones_Available;