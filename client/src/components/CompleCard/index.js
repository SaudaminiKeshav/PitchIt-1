import React, { useEffect, useState } from "react";
import "./style.css";

const CompleCard = (props) => {

    const [ trips, setTrips] = useState([]);

    useEffect(()=>{
      console.log("Complete Works!");
      fetch("/api/completed")
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
                                <h5 style={{fontWeight: "600", marginBottom: "5%"}} className="card-title">{each.title}</h5>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><p style={{fontWeight: "700"}}>Dates: </p>{each.date}</p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><p style={{fontWeight: "700"}}>Location: </p>{each.location}</p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><p style={{fontWeight: "700"}}>Campers: </p>{each.campers}</p>
                                <p style={{ textAlign: "left", marginLeft: "5%" }} className="card-text"><p style={{fontWeight: "700"}}>Backpack: </p>{each.items}</p>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-warning">Update</button>
                                    <button type="button" class="complete-trip-btn btn btn-outline-success" data-toggle="modal" data-target="#exampleModal{{id}}">
                                        Complete Trip
                                    </button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*//Prompt for review*/}
                    <div className="modal fade" id="exampleModal{{id}}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
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
                            <button type="button" className="btn btn-secondary no-btn" data-id="{{id}}" data-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary writeTxtBtn" data-id="{{id}}" data-toggle="modal" data-target="#exampleModalCenter{{id}}" data-dismiss="modal">
                                Yes
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*//Prompt for review*/}


                    {/*<!-- Review Modal -->*/}
                    <div className="modal fade" id="exampleModalCenter{{id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">{/*{{ title }}*/}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Write your review:</label>
                                        <textarea className="form-control review-text{{id}}" id="exampleFormControlTextarea1" rows="3" maxlength="250"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary save-review" data-dismiss="modal" data-id="{{id}}">Save changes</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Review Modal -->*/}

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                    
                    </>
                )
            })}
        </>
    )
}

export default CompleCard;