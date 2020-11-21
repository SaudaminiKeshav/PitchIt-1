import React, { Component } from "react";
import "../MainProfile/style.css";
//import placeHolder from "../../img/placeholder.heic";
//import axios from 'axios';

class ProfilePicture extends Component {
    //const user = this.props.user;

    Post = event => {
        event.preventDefault();
        const file = document.getElementById("add-image-input").files;
        const formData = new FormData();
    
        formData.append("img", file[0]);
    
        fetch("http://localhost:5000/", {
          method: "POST",
          body: formData
        }).then(res => {
          //console.log(res.keys(object).find(keys => object[keys] === "name"));
        });
    
        document.getElementById("img").setAttribute("src", `http://localhost:5000/${file[0].name}`);
        console.log(file[0]);
      };


    //<img src={placeHolder} onClick={() => this.fileInput.click()} className="profilePicStyle" alt="profile" />

render () { 
    return( <>
    <div className="img-upload">
        <input type="file" className="add-image" id="add-image-input" aria-describedby="add-image-input" />
        <label className="add-image-label" htmlFor="add-image-input">Choose File</label>
        <button type="button" className="btn btn-primary" onClick={this.Post}>Upload</button>
        <hr />
        <img id="img" className="profilePicStyle" alt="profile photo" />
    </div>
    </>
    );
} 
}

export default ProfilePicture;