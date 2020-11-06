import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../actions/authActions";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Suggestions from "../components/Suggestions";


const Dashboard = () => {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };

//   const { user } = this.props.auth;
    return (
    <div>
        <Navbar />
        <Hero />
        <Suggestions />
    </div>
    );

}

// Dashboard.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);

export default Dashboard;