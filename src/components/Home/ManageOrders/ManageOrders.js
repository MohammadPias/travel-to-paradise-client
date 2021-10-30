import React from 'react';
import { useState, useEffect } from 'react';
import AllOrder from '../AllOrder/AllOrder';


const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://immense-taiga-30421.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(result => setAllOrders(result))
    }, [])

    return (
        <div className="container">
            <h2>All Products</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Service Id</th>
                        <th scope="col">Service</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">update</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    allOrders?.map(order => <AllOrder
                        key={order.id}
                        order={order}
                    ></AllOrder>)
                }
            </table>
        </div>
    );
};

export default ManageOrders;