import React from 'react';
import { useEffect, useState } from "react";
import { Row } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';
import Order from '../../Order/Order';

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
        </div>
    );
};

export default MyOrders;