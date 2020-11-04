import React from "react";
import 'bootstrap-css-only/css/bootstrap.min.css';
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <li className="brand nav-link">
                <img src="img/campfire.png" alt="" className='logo' width='50px' />
            </li>
            <a className="navbar-brand" href="">PitchIt</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Contact</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Out</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;