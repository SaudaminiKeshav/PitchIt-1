import React, { Component } from "react";
import "../MainProfile/style.css";
import placeHolder from "../../img/placeholder.heic";
import axios from 'axios';

// document.querySelector('.upload-profile-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     let profilePic = document.getElementById('add-image-input').value;
//     console.log(profilePic);
// })

class ProfilePicture extends Component {
    //const user = this.props.user;
    
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        //console.log(event.target.files[0]);
        //console.log(event);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = (props) => {
        //console.log(this.props);
        //const formData = new FormData();
        //formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
        //formData.append('user', this.props.user);

        console.log(this.state.selectedFile);

        axios.put('/api/profile', this.state.selectedFile)
         .then(res => {
            console.log(res);
            this.setState({
                selectedFile: res.data.profilepic
            });
        })
        .catch((error) => {
            console.log('Error in file upload handler')
        })
        console.log(this.props);
    }

render () { 
    return( <>
        <div className="img-upload">
            <label className="add-image-label">
                <input id="add-image-input" type="file" onChange={this.fileSelectedHandler} className="add-image" ref={fileInput => this.fileInput = fileInput} />
                <img src={placeHolder} onClick={() => this.fileInput.click()} className="profilePicStyle" alt="profile" />
            </label>
            <button type="submit" className="upload-profile-btn" onClick={this.fileUploadHandler}>+</button>
    </div>
    </>
    );
} 
}

export default ProfilePicture;