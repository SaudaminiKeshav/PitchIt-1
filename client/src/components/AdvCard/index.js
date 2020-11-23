import React, { useEffect, useState } from "react";
import "./style.css";

const AdvCard = (props) => {

    const [ trips, setTrips] = useState([]);

    const completeTrip = (event) => {
        event.preventDefault();

        const payload = {
            title: event.target.parentElement.parentElement.querySelector("#title").innerHTML,
            location: event.target.parentElement.parentElement.querySelector("#location").innerHTML,
            date: event.target.parentElement.parentElement.querySelector("#date").innerHTML,
            campers: event.target.parentElement.parentElement.querySelector("#campers").innerHTML,
            items: event.target.parentElement.parentElement.querySelector("#items").innerHTML
        };

        console.log("This is the info clicked", payload);
    };

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
                    <>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <img
                                src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fglacier-national-park-GLACIERSIGNS0120.jpg"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 id="title" style={{fontWeight: "600", marginBottom: "5%"}} className="card-title">{each.title}</h5>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Dates: </span><span id="date">{each.date}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Location: </span><span id="location">{each.location}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Campers: </span><span id="campers">{each.campers}</span></p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><span style={{fontWeight: "700"}}>Backpack: </span><span id="items">{each.items}</span></p>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-warning" onClick={completeTrip}>Update</button>
                                    <button type="button" className="complete-trip-btn btn btn-outline-success" data-toggle="modal" data-target="#exampleModalid">
                                        Complete Trip
                                    </button>
                                    <button type="button" class="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*//Prompt for review*/}
                    <div className="modal fade" id="exampleModalid" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div id="modal-content" className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Review Trip?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Would you like to write a review for your trip?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary no-btn" data-id="id" data-dismiss="modal">No</button>
                                <button type="button" className="btn btn-primary writeTxtBtn" data-id="id" data-toggle="modal" data-target="#exampleModalCenterid" data-dismiss="modal">
                                    Yes
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/*//Prompt for review*/}


                    {/*<!-- Review Modal -->*/}
                    <div className="modal fade" id="exampleModalCenterid" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div id="modal-content" className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle"></h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Write your review:</label>
                                        <textarea className="form-control review-textid" id="exampleFormControlTextarea1" rows="3" maxlength="250"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary save-review" data-dismiss="modal" data-id="id">Save changes</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Review Modal -->*/}
                    
                    </>
                )
            })}
        </>
    )
}

export default AdvCard;