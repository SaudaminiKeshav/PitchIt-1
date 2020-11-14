import React from "react";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Form from "../Forms/ContactForm.js";

class Contact extends React.Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  state = {
    fields:{}
  };

  onSubmit = (fields) => {
    this.setState({ fields });
    // console.log("App comp got : ", fields);
  };


render() {
    const { user } = this.props.auth;
return (
    <>
        <Navbar />
        <div style={{ height: "150vh" }} className="container valign-wrapper">
        <div style={{ padding: "15px" }} className="row">
          <Form onSubmit={fields => this.onSubmit(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
          <div className="col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "}
                <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
          </div>
        </div>
       </div>
    </>
    );
  }
}

Contact.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Contact);