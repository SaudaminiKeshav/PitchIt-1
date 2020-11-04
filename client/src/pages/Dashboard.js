import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../actions/authActions";
import Hero from "../components/Hero"


const Dashboard = () => {
//   onLogoutClick = e => {
//     e.preventDefault();
//     this.props.logoutUser();
//   };

//   const { user } = this.props.auth;
    return (
    <div>
        <Hero />
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