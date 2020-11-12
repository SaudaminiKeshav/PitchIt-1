import React from "react";
import "../MainProfile/style.css"

const profileAreaStyle = {
    backgroundColor: "none"
}

// const tripStyle = {
//   textAlign: "center",
//   borderRadius: "10%",
//   backgroundColor: "orange"
// }

// const mileStoneStyle = {
//   textAlign: "center",
//   borderRadius: "50%",
//   backgroundColor: "green"
// }

const Trips = (props) => {

  return <>
  <div style={ profileAreaStyle }>
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Trip Title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Trip Location</h6>
          <p class="card-text">Trip Dates</p>
          <button>View Details</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Trip Title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Trip Location</h6>
          <p class="card-text">Trip Dates</p>
          <button>View Details</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
    <div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Trip Title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Trip Location</h6>
          <p class="card-text">Trip Dates</p>
          <button>View Details</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  </div>
  </>;
}

export default Trips;