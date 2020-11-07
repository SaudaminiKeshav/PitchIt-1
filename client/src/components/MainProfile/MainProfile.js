import React from "react";

const profileAreaStyle = {
    backgroundColor: "orange"
}

const tripStyle = {
    textAlign: "center",
    borderRadius: "10%",
    backgroundColor: "orange"
}

const mileStoneStyle = {
    textAlign: "center",
    borderRadius: "50%",
    backgroundColor: "green"
}

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name

    return <>
        <div style={profileAreaStyle}>
            <container>
              <p>I am the container</p>
            </container>
        </div>
    </>;
}

export default MainProfile;