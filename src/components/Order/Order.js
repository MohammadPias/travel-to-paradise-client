import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Order = ({ order }) => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={order?.service?.img} />
                    <Card.Body>
                        <Card.Title>{order?.service?.name}</Card.Title>
                        <Card.Text>
                            {order?.service?.description.slice(0, 100)}
                        </Card.Text>
                        <Card.Text>
                            Status: <h6 className="text-danger d-inline">{order?.status}</h6>
                        </Card.Text>
                        <div>
                            <Button className="btn-regular rounded-pill">Cancel Order</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Order;