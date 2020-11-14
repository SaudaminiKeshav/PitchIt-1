import React, { Component } from "react";
import axios from 'axios';

class CreateTrip extends React.Component {
    state = {
        title: '',
        location: '',
        date: '',
        campers: '',
        items: '',
        // posts: []
    };

    // componentDidMount = () => {
    //     this.getTripPost();
    // };

    // GETing trip data with axios
    // getTripPost = () => {
    //     axios.get('/api')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ posts: data });
    //             console.log('Data has been received!');
    //         })
    //         .catch(() => {
    //             console.log('Error retrieving data!');
    //         });
    // }

    // Handling name/ value as targets
    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };

    // POSTing trip data with axios
    submit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            campers: this.state.campers,
            items: this.state.items
        };

        axios({
            url: '/api/create',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server!');
                this.resetUserInputs();
            })
            .catch(() => {
                console.log('Internal server error :(');
            });
    };

    // Reset inputs
    resetUserInputs = () => {
        this.setState({
            title: '',
            location: '',
            date: '',
            campers: '',
            items: ''
        });
    };

    render(){
        console.log('State: ', this.state);
        return(
            <div>
                <div style={{paddingTop: "6%", paddingLeft: "6%", paddingRight: "6%", paddingBottom: "6%"}}>
                    <form id="create-adventure" onSubmit={this.submit}>
                        <div>
                            <label htmlFor="title">Adventure Name:</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="location">National Park:</label>
                            <input
                                list="campground-list"
                                type="text"
                                name="location"
                                id="location"
                                placeholder="search..."
                                value={this.state.location}
                                onChange={this.handleChange}
                            ></input>
                            <datalist id="campground-list">
                            </datalist>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="date">Dates:</label>
                            <input
                                type="text"
                                name="date"
                                id="date"
                                placeholder="MM/DD/YYYY - MM/DD/YYYY"
                                value={this.state.date}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="campers">Additional Camper's Username:</label>
                            <input
                                list="campers-list"
                                type="text"
                                name="campers"
                                id="campers"
                                value={this.state.campers}
                                onChange={this.handleChange}
                            ></input>
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
                            <textarea
                                className="form-control"
                                name="items"
                                id="items"
                                rows="3"
                                value={this.state.items}
                                onChange={this.handleChange}
                            ></textarea>
                        </div>
                    <a className="submit-trip" href=""><button type="submit" className="btn btn-outline-success">Submit</button></a>
                    <a className="cancel" href="/dashboard"><button type="button" className="btn btn-outline-success">Cancel</button></a>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateTrip;