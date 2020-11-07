import React from "react";
import Navbar from "../components/Navbar";

function TripForm() {
    return(
        <div>
            <Navbar />
            <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                <form id="create-adventure">
                    <div>
                        <label for="title">Adventure Name:</label>
                        <input type="text" id="title"></input>
                    </div>
                    <br></br>
                    <div>
                        <label for="location">National Park:</label>
                        <input list="campground-list" type="text" id="location" placeholder="search..."></input>
                        <datalist id="campground-list">
                        </datalist>
                    </div>
                    <br></br>
                    <div>
                        <label for="date">Dates:</label>
                        <input type="text" id="date" placeholder="MM/DD/YYYY - MM/DD/YYYY"></input>
                    </div>
                    <br></br>
                    <div>
                        <label for="campers">Additional Camper's Username:</label>
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
                        <label for="exampleFormControlTextarea1">Backpack:</label>
                        <textarea className="form-control" id="items" rows="3"></textarea>
                    </div>
                <a className="submit-trip" href="/dashboard"><button type="button" className="btn btn-outline-success">Submit</button></a>
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

export default TripForm;