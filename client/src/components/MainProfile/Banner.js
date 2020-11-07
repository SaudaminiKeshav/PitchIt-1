import React from "react";

const bannerStyle = {
    backgroundColor: "beige"
}

const Banner = (props) => {
let userName = props.user.name;
  return <>
  <div style={ bannerStyle }>
    <div>
        <h2 style={{ paddingTop: "10%", paddingLeft: "40%" }}>Welcome {userName}</h2>
    </div>
  </div>
  </>;
}

export default Banner;