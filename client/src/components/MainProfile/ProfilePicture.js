import React, { Component } from "react";
import "../MainProfile/style.css";
import classNames from 'classnames';

import placeHolder from "../../img/placeholder.heic";
//import axios from 'axios';

class ProfilePicture extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    
    event.preventDefault();
    
    const file = document.getElementById("add-image-input").files;
    const formData = new FormData();

    formData.append("img", Buffer.from(file[0]).toString('base64'));

    fetch("http://localhost:5000/", {
      method: "POST",
      body: formData
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    if(this.state.file != null){
      console.log(Buffer.from(this.state.file).toString('base64') )
    }
   
    return (<>
      <label htmlFor="myInput"> <img src={this.state.file ? this.state.file :placeHolder} type="camera" id="profileImage" className={classNames('profilePicStyle', 'add-image-label')} htmlFor="add-image-input" aria-describedby="add-image-input" alt="profile" /></label>
      <input
        id="myInput"
        style={{ display: 'none' }}
        type={"file"}
        onChange={this.handleChange}
      />
    </>
    );
  }
}

export default ProfilePicture;