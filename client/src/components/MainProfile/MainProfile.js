import React from "react";
import { Container } from "react-bootstrap";

const contentAreaStyle = {
    backgroundColor: "white",
    width: "75%",
    height: "300px",
    marginLeft: "20%",
    top: "40%",
    position: "absolute",
    borderRadius: "30px",
    boxShadow: "0px 0px 5px rgba(0,0,0,.6)",
    fontWeight: "900",
}

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name;
    let userSelectedOption = props.userSelection;

    return <>
        <div className="container" style={contentAreaStyle}>
            <h1 style={{textAlign:"center" }}>{userSelectedOption}</h1>
        <hr/>
        </div>
    </>;
}

export default MainProfile;