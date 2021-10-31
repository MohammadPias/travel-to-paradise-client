import React from 'react';
import { useEffect, useState } from "react";
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import Order from '../../Order/Order';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const url = `https://immense-taiga-30421.herokuapp.com/myOrders`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setOrders(result);
            })
    }, [user]);
    // console.log(user.email)
    console.log(orders)
    const collectOrder = orders?.filter(order => order.email.includes(user.email));
    console.log(collectOrder);
    return (
        <div className="container w-75 mt-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {
                    collectOrder?.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </Row>

            {/* Add new service */}
            <div className="container btn-container">
                <div className="add-btn">
                    <Link to="/addService"><Button className="btn-regular rounded-pill"><i className="fas fa-plus-square"></i>  Add a new service</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;