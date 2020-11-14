import React from "react";

const Milestones_Timeline = (props) => {
    let totalTrips = props.trips;
    let trips = [];

    if (totalTrips != 0 && totalTrips % 2 == 0) {
        trips.push(<li>
            <div class="direction-r">
                <div class="flag-wrapper">
                    <span class="flag">" "</span>
                    <span class="time-wrapper"><span class="time">" "</span></span>
                </div>
                <div class="desc">" "</div>
            </div>
        </li>);
    } else if (totalTrips != 0 && totalTrips % 2 != 0) {
        trips.push(<li>
            <div class="direction-l">
                <div class="flag-wrapper">
                    <span class="flag">" "</span>
                    <span class="time-wrapper"><span class="time">" "</span></span>
                </div>
                <div class="desc">" "</div>
            </div>
        </li>);
    }

    return <>

        <ul class="timeline">
            {trips}
        </ul>
    </>;
}

export default Milestones_Timeline;