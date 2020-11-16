import React, { useEffect, useState } from "react";

const AdvCard = (props) => {

    const [ trips, setTrips] = useState([]);

    useEffect(()=>{
      console.log("It works!");
      fetch("/api/all")
      .then(data=> data.json())
      .then(data => setTrips(data))
    },[])

    return (
        <>
            {trips.map((each, index)=>{
                return (
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img
                                src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fglacier-national-park-GLACIERSIGNS0120.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{each.title}</h5>
                                <p className="card-text">{each.date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default AdvCard;