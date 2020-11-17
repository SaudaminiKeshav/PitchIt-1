import React, { useEffect, useState } from "react";


// const profileAreaStyle = {
//   backgroundColor: "orange"
// }

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

  const [ trips, setTrips] = useState([]);

  useEffect(()=>{
    console.log("works");
    fetch("/api/all")
    .then(data=> data.json())
    .then(data => setTrips(data))
  },[])


  return <>
  {/* <div style={ profileAreaStyle }>
    {trips.map((each, index)=>{
      return (
        <div>
          <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
              <h5 class="card-title">{each.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{each.location}</h6>
              <p class="card-text">{each.date}</p>
              <button>View Details</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      )
    })}
    
  </div> */}
              {trips.map((each, index)=>{
                return (
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{each.title}</h5>
                                <p className="card-text">{each.date}</p>

                                <button>View Details</button>
                                <button>Edit</button>
                            </div>
                        </div>
                    </div>
                )
            })}
  </>;
}

export default Trips;