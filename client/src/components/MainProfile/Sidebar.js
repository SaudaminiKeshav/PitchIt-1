import React from "react";
import tripIcon from "../../img/trips-icon.png";
import reviewIcon from "../../img/review-icon.png";
import badgeIcon from "../../img/badge-icon.png";
import placeHolder from "../../img/placeholder.png";
import arrowIcon from "../../img/arrowIcon.png";
import "../MainProfile/style.css"
import classNames from 'classnames'

const SideBar = (props) => {
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
            <div className="sideBarStyle">
                <img src={placeHolder} className="profilePicStyle" alt="profile" />
                <ul>
                    <li className={classNames('sideBarMenuItem', props.userSelection == "Trips" ? 'tripActive' : 'tripsStyle')} onClick={displayTrips.bind(this)}>
                        <h5 className="optionsTextAlign">
                            <img src={tripIcon} className="iconStyle" alt="cannot display" />
                            Trips
                            <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', props.userSelection == "Reviews" ? 'revewActive' : 'reviewStyle')} onClick={displayReviews.bind(this)}>
                        <h5 className="optionsTextAlign">
                            <img src={reviewIcon} className="iconStyle" alt="cannot display" />
                            Reviews
                            <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        </h5>
                    </li>
                    <li className={classNames('sideBarMenuItem', props.userSelection == "Milestones" ? 'milestoneActive' : 'mileStoneStyle')} onClick={displayMilestones.bind(this)}>
                        <h5 className="optionsTextAlign">
                            <img src={badgeIcon} className="iconStyle" alt="cannot display" />
                            Milestones
                            <img src={arrowIcon} className="arrowIconStyle" alt="profile" />
                        </h5>
                    </li>
                </ul>
            </div>
        </section>
    </>;
}

export default SideBar;