import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import placeHolder from "../../img/placeholder.png";

const sideBarStyle = {
    backgroundColor: "teal",
    float: "left",
    marginTop: "3%",
    marginLeft: "3%",
    width: "20%",
    textAlign: "left",
    padding: "1%",
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "large",
    boxShadow: "0px 0px 5px rgba(0,0,0,.6)"
}

const profilePicStyle = {
    height: "35%",
    width: "35%",
    marginBottom: "50%",
    textAlign: "center"
}

const iconStyle = {
    height: "15%",
    width: "15%",
    marginRight: "10%"
}

const SideBar = () => {
  return <>
      <div style={ sideBarStyle }>
        <div>
            <img src={placeHolder} alt="profile picture" />
        </div>

        <ul>
            <li><img src={tripIcon} style={iconStyle} alt="cannot display"/>Trips</li>
            <hr/>
            <li><img src={reviewIcon} style={iconStyle} alt="cannot display"/>Reviews</li>
            <hr/>
            <li><img src={badgeIcon} style={iconStyle} alt="cannot display"/>Milestones</li>
        </ul>
      </div>
      </>;
}

export default SideBar;