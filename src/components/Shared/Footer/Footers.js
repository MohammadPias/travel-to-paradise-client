import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.svg';
import './Footer.css';

const Footers = () => {
    return (
        <div className="footer-container footer-bg text-white mt-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="logo col">
                    <img src={logo} alt="" />
                    <p className="text-light text-justify w-75">We continue to explore new places for you, our clients and we won’t sell a destination unless we’ve checked it out ourselves.</p>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">About Services</Link>
                    <Link to="/">Read our blog</Link>
                    <Link to="/">Signup to Booking</Link>
                    <Link to="/">Privacy and Policy</Link>
                </div>
                <div className="col d-flex flex-column">
                    <Link to="/">Get help</Link>
                    <Link to="/">Read FAQs</Link>
                    <Link to="/">Airlines</Link>
                    <Link to="/">Payment Method</Link>

                    <div>
                        <Link to="/"><i className="fab fa-linkedin font-style"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square font-style"></i></Link>
                        <Link to="/"><i className="fab fa-facebook-square font-style"></i></Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 border-top footer-bg">
                <p className="mt-2 text-center"><small>copyright &copy; 2022 Travel to Paradise</small></p>
            </div>

        </div>
    );
};

export default Footers;