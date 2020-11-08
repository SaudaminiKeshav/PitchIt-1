import React from "react";
import "./style.css";
import campfire from "../../img/campfire.gif";
import { render } from "@testing-library/react";

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    let icon;
    switch (userSelectedOption) {
        case "Trips":
            icon = <img src={campfire} className="contentTitleIcon" alt="profile" />
            break;
        default: <></>
            break;
    }
    return <>
        <div className="contentAreaStyle">
            {icon}
            <h3 style={{ textAlign: "start", verticalAlign: "middle", marginTop: "1%", padding: ".5%", display: "inline-block" }}>{userSelectedOption}</h3>
            <hr />
        </div> 
        <div>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </div>
    </>;
}

export default MainProfile;