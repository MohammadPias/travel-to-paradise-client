import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, country, description, img } = service;
    return (
        <div>
            <Col>
                <Card className="card-container">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="content">
                        <Card.Title className="my-1">{name}</Card.Title>
                        <Card.Text className="my-1">Country : {country}</Card.Text>
                        <Card.Text className="my-1">{description.slice(0, 100)}</Card.Text>
                        <Button className="btn-regular rounded-pill">Booking</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;