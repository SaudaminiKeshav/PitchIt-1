import React from "react";
import "./style.css";

const Milestones_Timeline = (props) => {
    let totalTrips = props.trips;
    let trips = props.trips;
    let tripArray = [];

    // trips.id % 2 == 0

    if (totalTrips !== 0) {
        tripArray.push(<li>
            <div className="direction-r">
                <div className="flag-wrapper">
                    <span className="flag">Trip ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
        tripArray.push(<li>
            <div className="direction-l">
                <div className="flag-wrapper">
                    <span className="flag">Trips ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
        tripArray.push(<li>
            <div className="direction-r">
                <div className="flag-wrapper">
                    <span className="flag">Trip ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
        tripArray.push(<li>
            <div className="direction-l">
                <div className="flag-wrapper">
                    <span className="flag">Trips ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
        tripArray.push(<li>
            <div className="direction-r">
                <div className="flag-wrapper">
                    <span className="flag">Trip ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
        tripArray.push(<li>
            <div className="direction-l">
                <div className="flag-wrapper">
                    <span className="flag">Trips ID</span>
                    <span className="time-wrapper"><span className="time">Date</span></span>
                </div>
                <div className="desc">Trip name</div>
                <div className="desc">Milestone name</div>
            </div>
        </li>);
    }

    console.log(trips)
    return <>
        <div className="container" style={{ clear: "both" }}>
            <ul className="timeline">
                {tripArray}
            </ul>
        </div>

    </>;
}

export default Milestones_Timeline;