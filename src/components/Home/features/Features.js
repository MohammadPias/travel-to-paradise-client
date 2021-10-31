import React from 'react';
import { useEffect, useState } from 'react';
import adventure from '../../../images/section/adventure.png';
import './Features.css'

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('https://immense-taiga-30421.herokuapp.com/features')
            .then(res => res.json())
            .then(result => setFeatures(result))
    }, []);
    console.log(features)
    return (
        <div className="container">
            <h3 className="text-center fw-bold mt-5">Our Features</h3>
            <div className="line"></div>
            <div className="feature-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {
                    features.map(feature =>
                        <div
                            key={feature._id}
                            className=" feature col d-flex justify-content-center align-items-center p-3"
                        >
                            <div className="feature-image w-50 me-3">
                                <img src={feature.img} alt="" />
                            </div>
                            <div className="feature-content w-50">
                                <h5>{feature.name}</h5>
                                <p className="text-justify">{feature.info.slice(0, 80)}</p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Features;