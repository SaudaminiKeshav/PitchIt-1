import React from "react";
import { create } from "../../models/create-trip";

const submitFormClick = (event) => {
    console.log("clicked submit trip");
    event.preventDefault();
    // Values to create a new trip
    const newTrip = {
        title: document.getElementById("title").value.trim(),
        date: document.getElementById("date").value.trim(),
        location: document.getElementById("location").value.trim(),
        campers: document.getElementById("campers").value.trim(),
        items: document.getElementById("items").value,
        completed: false,
        review: ""
    };
    console.log(newTrip);
    // Post new trip
    // $.ajax("/api/trips", {
    //   type: "POST",
    //   data: newTrip
    // }).then(
    //   function() {
    //     console.log("created new trip");
    //     window.location.replace("/dashboard");
    // });

    tripData();
};

let trips = [];

fetch("/create")
    .then(res => {
        return res.json();
    })
    .then(data => {
        trips = data;
});

const tripData = () => {
    console.log("Trip data called");
    const newTrip = {
        title: document.getElementById("title").value.trim(),
        date: document.getElementById("date").value.trim(),
        location: document.getElementById("location").value.trim(),
        campers: document.getElementById("campers").value.trim(),
        items: document.getElementById("items").value,
        completed: false,
        review: ""
    };
    console.log(newTrip);
    // also send to server
    fetch("/create", {
      method: "POST",
      body: JSON.stringify(newTrip),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(res => {
        console.log("First return reached");
        return res.json();
    })
    .then(data => {
        // clear form
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("location").value = "";
        document.getElementById("campers").value = "";
        document.getElementById("items").value = "";
        console.log("Cleard form");
    })
    .catch(err => {
      console.log(err);
    });
}

const CreateTrip = () => {
    return(
        <div>
            <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                <form id="create-adventure">
                    <div>
                        <label htmlFor="title">Adventure Name:</label>
                        <input type="text" id="title"></input>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="location">National Park:</label>
                        <input list="campground-list" type="text" id="location" placeholder="search..."></input>
                        <datalist id="campground-list">
                        </datalist>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="date">Dates:</label>
                        <input type="text" id="date" placeholder="MM/DD/YYYY - MM/DD/YYYY"></input>
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="campers">Additional Camper's Username:</label>
                        <input list="campers-list" type="text" id="campers"></input>
                        <datalist id="campers-list">
                            {/* {{#each user}}
                                <option>{{this.name}}</option>
                            {{/each}} */}
                        </datalist>
                        <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect add-btn">
                            <i className="material-icons">add</i>
                        </button>
                        <ul className="added-campers">
                        </ul>
                    </div>
                    <br></br>
                    <div className="form-group supply-list">
                        <label htmlFor="exampleFormControlTextarea1">Backpack:</label>
                        <textarea className="form-control" id="items" rows="3"></textarea>
                    </div>
                <a className="submit-trip" href="/dashboard"><button type="button" className="btn btn-outline-success" onClick={submitFormClick}>Submit</button></a>
                <a className="cancel" href="/dashboard"><button type="button" className="btn btn-outline-success">Cancel</button></a>
                </form>
                <div className="area">
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTrip;