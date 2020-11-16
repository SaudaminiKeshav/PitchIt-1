import React from "react";
import "./style.css";
import campfire from "../../img/campfire.gif";
// import { render } from "@testing-library/react";
import reviewsIcon from "../../img/star.png";
import Reviews from "../MainProfile/Reviews";
import Trips from "../MainProfile/Trips";
import Milestones from "../MainProfile/Milestones";


const MainProfile = (props) => {
    console.log(props.userSelection)
    // let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    let icon;
    let content;
    switch (userSelectedOption) {
        case "Trips":
            icon = <img src={campfire} className="contentTitleIcon" alt="profile" />
            content = <Trips />
            break;
        case "Reviews":
            icon = <img src={reviewsIcon} className="contentTitleIcon" alt="stars" />
            content = <Reviews />
            break;
        case "Milestones":
            icon = <img src="..." className="contentTitleIcon" alt="mountain badge" />
            content = <Milestones />
            break;
        default: <></>
            break;
    }
    return <>
        <div className="contentAreaStyle">
            {icon}
            <h3 style={{ textAlign: "start", verticalAlign: "middle", marginTop: "1%", padding: ".5%", display: "inline-block" }}>{userSelectedOption}</h3>
            <hr />
            {content}
        </div>
        <div>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
    </>;
}

export default MainProfile;