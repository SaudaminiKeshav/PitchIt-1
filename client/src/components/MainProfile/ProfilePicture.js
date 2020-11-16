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
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);


        axios.post('api/', fd)
         .then(res => {
            console.log(res);
            this.setState({
            img: res.data.img
            });
        })
        .catch((error) => {
            console.log('Error in file upload handler')
        })
    }

render () { 
    return( <>
        <div className="img-upload">
            <label className="add-image-label">
                <input id="add-image-input" type="file" onChange={this.fileSelectedHandler} className="add-image" ref={fileInput => this.fileInput = fileInput} />
                <img src={placeHolder} onCLick={() => this.fileInput.click()} className="profilePicStyle" alt="profile" />
            </label>
            <button type="submit" className="upload-profile-btn" onClick={this.fileUploadHandler}>+</button>
    </div>
    </>
    );
} 
}

export default ProfilePicture;