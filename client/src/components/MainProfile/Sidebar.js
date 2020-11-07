import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import placeHolder from "../../img/placeholder.png";
import "../MainProfile/style.css"

const sideBarStyle = {
    backgroundColor: "white",
    float: "left",
    borderRadius: "30px",
    width: "12%",
    height: "10%",
    marginTop: "10%",
    fontWeight: "900",
    fontSize: "large",
    boxShadow: "0px 0px 2px rgba(0,0,0,.5)",
    marging: "5%",
    marginLeft: "1%",
    textAlign: "center"
}

const profilePicStyle = {
    height: "55%",
    width: "55%",
    margin: "10%"
}

const iconStyle = {
    height: "15%",
    width: "15%",
    margin: "10%"
}
const OptionsTextAlign = {
    textAlign: "start",
    fontSize: "105%",
    fontWeight: "795",
}

const SideBar = () => {

    function displayTrips() {

    }

    function displayReviews() {

    }

    function displayMilestones() {

    }

    return <>
        <section>
            <div style={sideBarStyle}>
                <img src={placeHolder} style={profilePicStyle} alt="profile picture" />
                <ul>
                    <li style={{ color: "#f4511e", padding: "10%", borderTop: "1px solid  rgb(238, 232, 232) " }} onClick={displayTrips}>
                        <h5 style={OptionsTextAlign}>
                            <img src={tripIcon} style={iconStyle} alt="cannot display" />
                            Trips
                        </h5>
                    </li>

                    <li></li>
                    <li style={{ color: "#7cb342", padding: "10%", borderTop: "1px solid  rgb(238, 232, 232)" }} onClick={displayReviews}>
                        <h5 style={OptionsTextAlign}>
                            <img src={reviewIcon} style={iconStyle} alt="cannot display" />
                            Reviews
                        </h5>
                    </li>
                    <li></li>
                    <li style={{ color: "#FFAB00", padding: "10%", borderTop: "1px solid  rgb(238, 232, 232)" }} onClick={displayMilestones}>
                        <h5 style={OptionsTextAlign}>
                            <img src={badgeIcon} style={iconStyle} alt="cannot display" />
                            Milestones
                        </h5>
                    </li>
                </ul>
            </div>
        </section>
    </>;
}

export default SideBar;