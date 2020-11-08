import React from "react";
import forest from "../../img/forest-background.jpg";

const bannerStyle = {
    //background: "url(https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)center / cover no-repeat, rgba(0,0,0,.609)",
    background: "url(https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=3589&q=80)center / cover no-repeat, rgba(0,0,0,0.609)",
    position: "fixed",
    zIndex: "-5",
    marginTop: "5%",
    width: "100%",
    height: "35%",
    textAlign: "center"
}

const Banner = (props) => {
let userName = props.user.name;
  return <>
  <div style={ bannerStyle }>
    <div>
        <h2 class="welcome">Welcome {userName}</h2>
        <p class="quote">"The mountains are calling, and I must go" -John Muir</p>
    </div>
  </div>
  </>;
}

export default Banner;