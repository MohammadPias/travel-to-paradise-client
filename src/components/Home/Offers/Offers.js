import React from 'react';
import { Link } from 'react-router-dom';
import offerBanner from '../../../images/banners/Travel2Paradise.png';
import './Offers.css'

const Offers = () => {
    return (
        <div className="mt-5">
            <h3 className="text-center fw-bold">Exclusive Offer</h3>
            <div className="line"></div>
            <div className="offer-container row">
                <div className="offer-image col-12 col-lg-8">
                    <img src={offerBanner} alt="" />
                </div>
                <div className="offer-content col-12 col-lg-4 d-flex
                justify-content-center align-items-center mt-5">
                    <div className="me-5">
                        <h2 className="fw-bold">SPECIAL OFFER HOLIDAYS</h2>
                        <h6>TOURS & HOLIDAYS IN 2021 & 2022</h6>
                        <p>Whether you’re hoping to bag a bargain, look for a last minute deal or secure a price for a next to nothing deposit; special offer holidays let you escape the rat race without having to break the bank.</p>
                        <Link to="/exclusiveOffer"><button className="btn-regular rounded-pill">Booking NOw</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;