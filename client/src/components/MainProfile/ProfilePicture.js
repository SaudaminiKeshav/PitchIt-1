import React, { Component } from "react";
import "../MainProfile/style.css";
import placeHolder from "../../img/placeholder.heic";
import axios from 'axios';

document.getElementById('img').setAttribute('src', file[0].name);

class ProfilePicture extends Component {
    //const user = this.props.user;
    state = {
        selectedFile: null
    }
    fileSelectedHandler = event => {
        //console.log(event.target.files[0]);
        
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

    Post = e => {
        e.preventDefault()
        const file = document.getElementById('add-image-input').files
        const formData = new FormData()
      
        formData.append('img', file[0])
      
        fetch('http://localhost:5000/', {
          method: 'POST',
          body: formData,
        }).then(r => {
          console.log(r)
        })
        console.log(file[0])
      }


    //<img src={placeHolder} onClick={() => this.fileInput.click()} className="profilePicStyle" alt="profile" />

render () { 
    return( <>
    <div className="img-upload">
            <label className="add-image-label">
                <input id="add-image-input" type="file" onChange={this.fileSelectedHandler} className="add-image" ref={fileInput => this.fileInput = fileInput} />
                <img src={this.state.selectedFile || placeHolder} className="profilePicStyle" alt="profile" />
            </label>
            <button type="submit" className="upload-profile-btn" onClick={this.fileUploadHandler}>Submit</button>
        {/* <input type="file" className="add-image" id="add-image-input" aria-describedby="add-image-input" />
        <label className="add-image-label" htmlFor="add-image-input">Choose File</label>
        <button type="button" className="btn btn-primary">Upload</button>
        <hr />
        <img id="img"></img> */}
    </div>
    </>
    );
} 
}

export default ProfilePicture;