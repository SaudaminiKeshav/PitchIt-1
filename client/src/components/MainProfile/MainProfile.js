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
    let userName = props.user.name

    return <>
        <div style={profileAreaStyle}>
            <div>
                <h2 style={{ paddingTop: "10%", paddingLeft: "40%" }}>Welcome {userName}</h2>
            </div>
        </div>
    </>;
}

export default MainProfile;