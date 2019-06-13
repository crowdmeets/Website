import React from 'react';
import './Login.css';
import linkedin from "./../../assets/images/Sign-In-Large---Default.png";
import { FormControlLabel, TextField, Checkbox, Button } from '@material-ui/core';
class Login extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4 justify-content-center align-items-center">
                        <div className="card p-4 m-2">
                            <div className="text-center">
                                <h3 className="text-muted login">Log in</h3>
                                <p className="text-muted">Welcome back to your network</p>
                            </div>
                            <form>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email"
                                    className=""
                                    type="email"
                                    name="email"
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
                                    name="password"
                                    autoComplete="off"
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                />
                                <div className="row text-center">
                                    <div className="col-md-7 col-12">
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox color="default" />}
                                            label="Keep me signed in"
                                            labelPlacement="end"
                                            className="text-muted"
                                        />
                                    </div>
                                    <div className="col-md-5 col-12 py-2 text-muted forget-pass">Forgot password?</div>
                                </div>
                                <div className="row pb-2">
                                    <div className="mx-auto">
                                        <Button variant="outlined" size="large">
                                            Log in
                                        </Button>
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
            </div>
        );
    }
}
export default Login;