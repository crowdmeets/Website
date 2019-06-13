import React from 'react';
import './Footer.css';
class Footer extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-muted">
                <div className="row justify-content-center align-items-center">
                    <div className="footer-panel mt-5 text-muted">
                        <h2 className="footer-title">JOIN OUR NEWSLETTER</h2>
                        <p className="footer-subtitle">connect with right people at the right place on the right time</p>
                        <form className="form-inline mt-4 ">
                            <input className="form-control ml-auto newletter-inp " type="text" />
                            <button className="btn btn-secondary mr-auto" type="submit">subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="contanier row">
                    <div className="ml-auto text-center pr-5 my-4 text-muted">
                        All Rights Reserved | Crowdmeets 2019
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;