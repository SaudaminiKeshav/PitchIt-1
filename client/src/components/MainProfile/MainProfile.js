import React from "react";

const MainProfile = (props) => {
    console.log(props.userSelection)
    let userName = props.user.name
    return <>
    <h2 style={{paddingTop:"10%", paddingLeft:"40%"}}>Welcome {userName}</h2>
    </>;
}

export default MainProfile;