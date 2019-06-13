import React from 'react';
import './Signup.css';
import linkedin from "./../../assets/images/Sign-In-Large---Default.png";
import { Button, TextField } from '@material-ui/core';
import { NavLink } from "react-router-dom";
class Signup extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 justify-content-center align-items-center">
                        <div className="card p-4 m-2">
                            <div className="text-center">
                                <h3 className="text-muted login">Sign up</h3>
                            </div>
                            <form>
                                <TextField
                                    id="outlined-name-input"
                                    label="Name"
                                    className=""
                                    type="text"
                                    name="sign-pn"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    className=""
                                    type="email"
                                    name="sign-email"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-pass-input"
                                    label="Password"
                                    className=""
                                    type="password"
                                    name="sign-password"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                />
                                <div className="row text-center py-2">
                                    <div className="col-md-12 col-12 text-muted forget-pass">Already a member?</div>
                                    <NavLink to="/login" className="col-md-12 col-12 pb-2 text-muted forget-pass">Login</NavLink>
                                </div>
                                <div className="row pb-2">
                                    <div className="mx-auto">
                                        <Button variant="outlined" size="large">
                                            Sign up
                                        </Button>
                                    </div>
                                </div>
                                <div className="row text-center text-muted py-2">
                                    <div className="small">When you "Continue", you agree to Crowdmeets Terms of Service.
                                            We will manage information about you as described in our
                                            Privacy Policy, and Cookie Policy.
                                    </div>
                                </div>
                                <div className="row mt-5 text-center">
                                    <div className="col-md-6 col-6 g-signin2" data-onsuccess="onSignIn">GOOGLE</div>
                                    <div className="col-md-6 col-6">
                                        <img src={linkedin} width="100%" alt="linked-in-btn" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div id='recaptcha' className="g-recaptcha" data-sitekey="6Lc786cUAAAAAEXQm-VGiW7lw53X3JTLr7KOpGdF"
                    data-callback="onSubmit"
                    data-size="invisible"></div>
            </div>

        );
    }
}
export default Signup;