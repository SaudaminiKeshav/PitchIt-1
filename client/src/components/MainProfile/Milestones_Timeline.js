import React from "react";
import "./style.css";

const Milestones_Timeline = (props) => {
    let totalTrips = props.trips;
    let trips = [];

    if (totalTrips != 0 && totalTrips % 2 == 0) {
        trips.push(<li>
            <div className="direction-r">
                <div className="flag-wrapper">
                    <span className="flag">" "</span>
                    <span className="time-wrapper"><span className="time">" "</span></span>
                </div>
                <div className="desc">" "</div>
            </div>
        </li>);
    } else if (totalTrips != 0 && totalTrips % 2 != 0) {
        trips.push(<li>
            <div className="direction-l">
                <div className="flag-wrapper">
                    <span className="flag">" "</span>
                    <span className="time-wrapper"><span className="time">" "</span></span>
                </div>
                <div className="desc">" "</div>
            </div>
        </li>);
    }

    return <>
        <section style={{clear:"both"}}>
            <ul className="timeline">
                {trips}
            </ul>
        </section>

    </>;
}

export default Milestones_Timeline;