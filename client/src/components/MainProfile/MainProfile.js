import React from "react";
import "./style.css";

const profileAreaStyle = {
    backgroundColor: "orange",
    position: "fixed",
    marginTop: "40%",
    marginLeft: "20%"
}

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    return <>
        <div className="contentAreaStyle">
            <h1 style={{ textAlign: "center" }}>{userSelectedOption}</h1>
            <hr />
        </div>
    </>;
}

export default MainProfile;