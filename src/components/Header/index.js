import React from 'react';
import logo from './../../assets/images/logo.png';
import './Header.css';
import { NavLink } from "react-router-dom";
class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // let { children } = this.props
        return (
            <div className="container-fluid App">
                <nav className="navbar navbar-expand-sm bg-white bor-btm-1">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Log in</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                        </li>
                    </ul>
                </nav >
            </div>
        );
    }
}
export default Header;