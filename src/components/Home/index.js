import React from 'react';
import home from './../../assets/images/home.png';
import './Home.css';
import { NavLink } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="home-title display-4 text-muted">CROWD MEETS</h1>
                        <p className="sub-title text-muted">Networking made simple</p>
                        <NavLink to="/login">
                            <button className="join-now-btn text-light">JOIN NOW</button>
                        </NavLink>
                    </div>
                    <div className="col-md-5">
                        <div className="my-5">
                            <img src={home} width="100%" alt="right-img" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;