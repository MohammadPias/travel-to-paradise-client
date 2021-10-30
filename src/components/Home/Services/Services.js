import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container mx-auto mt-5" id="services">
            <h3 className="text-center fw-bold">Services</h3>
            <div className="line"></div>
            {
                services.length === 0 ?
                    <div className=" w-25 mx-auto">
                        <Spinner animation="border" variant="success" />
                    </div>
                    :
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(service => <Service
                                key={service._id}
                                service={service}
                            ></Service>)
                        }
                    </Row>
            }
        </div>
    );
};

export default Services;