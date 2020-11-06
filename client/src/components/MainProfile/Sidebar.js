import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import placeHolder from "../../img/placeholder.png";

const sideBarStyle = {
    backgroundColor: "#FFFFFF",
    float: "left",
    borderRadius: "40px",
    width: "12%",
    height: "10%",
    marginTop: "10%",
    fontWeight: "bold",
    fontSize: "large",
    boxShadow: "0px 0px 2px rgba(0,0,0,.5)",
    textAlign: "center",
    marging: "5%",
    marginLeft: "1%"
}

const profilePicStyle = {
    height: "55%",
    width: "55%",
    margin: "10%",
    textAlign: "center",
    alignSelf: "center"
}

const iconStyle = {
    height: "15%",
    width: "15%",
    margin: "10%",
}

const SideBar = () => {
    return <>
        <div style={sideBarStyle}>
            <img src={placeHolder} style={profilePicStyle} alt="profile picture" />
            <ul>
                <hr />
                <li style={{ color: "rgb(76, 192, 61)", margin: "10%" }}><img src={tripIcon} style={iconStyle} alt="cannot display" />Trips</li>
                <hr />
                <li style={{ color: "brown", margin: "10%" }}><img src={reviewIcon} style={iconStyle} alt="cannot display" />Reviews</li>
                <hr />
                <li style={{ color: "orange", margin: "10%" }}><img src={badgeIcon} style={iconStyle} alt="cannot display" />Milestones</li>
            </ul>
        </div>
    </>;
}

export default SideBar;