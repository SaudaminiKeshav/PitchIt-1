import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import placeHolder from "../../img/placeholder.png";
import "../MainProfile/style.css"
import classNames from 'classnames'

const sideBarStyle = {
    float: "left",
    width: "12%",
    height: "10%",
    marginTop: "10%",
    fontWeight: "900",
    fontSize: "large",

    marging: "5%",
    marginLeft: "4%",
    textAlign: "center"
}

const iconStyle = {
    height: "15%",
    width: "15%",
    margin: "10%"
}
const OptionsTextAlign = {
    textAlign: "start",
    fontSize: "100%",
    fontWeight: "795",
}

// let classes = classNames.bind(styles);

const SideBar = (props) => {
    // const [sideBarOption, setSideBarOption] = useState('');
    console.log(props.user);

    function displayTrips() {
        props.onSelectionChange("Trips")
    }

    function displayReviews() {
        props.onSelectionChange("Reviews")
    }

    function displayMilestones() {
        props.onSelectionChange("Milestones")
    }

    return <>
        <section>
            <div style={sideBarStyle}>
                <img src={placeHolder} className="profilePicStyle" alt="profile" />
                <ul>
                    <li className={classNames('sideBarMenuItem', 'tripsStyle')} onClick={displayTrips.bind(this)}>
                        <h5 style={OptionsTextAlign}>
                            <img src={tripIcon} style={iconStyle} alt="cannot display" />
                            Trips
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', 'reviewStyle')} onClick={displayReviews.bind(this)}>
                        <h5 style={OptionsTextAlign}>
                            <img src={reviewIcon} style={iconStyle} alt="cannot display" />
                            Reviews
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', 'mileStoneStyle')} onClick={displayMilestones.bind(this)}>
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