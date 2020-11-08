import React from "react";

const contentAreaStyle = {
    backgroundColor: "white",
    width: "75%",
    marginLeft: "20%",
    top: "35%",
    position: "absolute",
    borderRadius: "30px",
    boxShadow: "1.5px 1.5px 3px rgba(1,1,1,.5)",
    fontWeight: "900",
}

// const tripStyle = {
//     textAlign: "center",
//     borderRadius: "10%",
//     backgroundColor: "orange"
// }

// const mileStoneStyle = {
//     textAlign: "center",
//     borderRadius: "50%",
//     backgroundColor: "green"
// }

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name

    return <>
        <div style={contentAreaStyle}>
            <h1 style={{ height: "300px" }}>{userName}</h1>
        </div>
    </>;
}

export default MainProfile;