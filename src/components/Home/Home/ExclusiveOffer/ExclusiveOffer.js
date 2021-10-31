import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../../../Hooks/useServices';

const ExclusiveOffer = () => {
    const { services } = useServices();
    return (
        <div className="container mt-5">
            <Row xs={1} md={3} className="g-4">
                {
                    services.slice(0, 6).map(service => <Col
                        key={service._id}
                    >
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {service.description.slice(0, 80)}
                                </Card.Text>
                                <Card.Text>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6>Regular Price:  $<del>{service.priceSingle}</del></h6>
                                        </div>
                                        <div>
                                            <h6>Offer Price:  ${service.priceSingle * 25 / 100}</h6>
                                        </div>
                                    </div>
                                </Card.Text>
                                <Card.Text>
                                    <Link to={`/placeOrder/${service._id}`}><Button className="btn-regular rounded-pill">Booking</Button></Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ExclusiveOffer;