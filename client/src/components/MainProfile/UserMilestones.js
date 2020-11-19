import React from "react";
import Milestones from "./Milestones";
import CamperBadge from "../../img/camper_badge.png";
import ExpertBadge from "../../img/expert.gif";
import ExplorerBadge from "../../img/explorer.gif";
import RookieBadge from "../../img/rookie.gif";
import SequoniaBadge from "../../img/sequoia_np.png";
import YellowstoneBadge from "../../img/yellowstone_np.png";
import YosemiteBadge from "../../img/yosemite_np.png";
import classNames from 'classnames';
import "./style.css";

const UserMilestones = (props) => {

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
        <div className="container" style={{ width: "auto", display: "flex" }}>

            <div className={classNames(props.trips == 1 || props.trips > 1 ? 'displayBlock' : 'displayNone')} style={badgeCardStyle} >
                <div className="card" style={badgeCardStyle}>
                    <img src={RookieBadge} alt=" " style={badgeStyle}></img>
                </div>
            </div>
            <div className={classNames(props.trips == 3 || props.trips > 3 ? 'displayBlock' : 'displayNone')} style={badgeCardStyle}>
                <div className="card" style={badgeCardStyle}>
                    <img src={ExplorerBadge} alt=" " style={badgeStyle} ></img>
                </div>
            </div>

            <div className={classNames(props.trips == 5 || props.trips > 5 ? 'displayBlock' : 'displayNone')} style={badgeCardStyle}>
                <div className="card" style={badgeCardStyle}>
                    <img src={CamperBadge} alt=" " style={badgeStyle}></img>
                </div>
            </div>

            <div className={classNames(props.trips == 10 || props.trips > 10 ? 'displayBlock' : 'displayNone')} style={badgeCardStyle}>
                <div className="card" style={badgeCardStyle}>
                    <img src={ExpertBadge} alt=" " style={badgeStyle}></img>
                </div>
            </div>

        </div>
    </>;
}

export default UserMilestones;