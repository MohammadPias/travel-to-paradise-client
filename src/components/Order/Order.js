import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Order = ({ order }) => {
    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://immense-taiga-30421.herokuapp.com/myOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Your order is deleted successfully");
                    }
                })
        }
    };
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
                            {
                                order.status === 'pending' ?
                                    <div>Status: <h6 className="text-danger d-inline">{order?.status}</h6></div>
                                    :
                                    <div>Status: <h6 className="text-success d-inline">{order?.status}</h6></div>
                            }
                        </Card.Text>
                        <div>
                            <Button onClick={() => handleDelete(order._id)} className="btn-regular rounded-pill">Cancel Order</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Order;