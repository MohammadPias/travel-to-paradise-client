import React from 'react';
import { useState, useEffect } from 'react';


const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [approve, setApprove] = useState(false);

    useEffect(() => {
        fetch('https://immense-taiga-30421.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(result => {
                // console.log(result)
                setAllOrders(result);

            })
    }, [approve]);

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
                        const collectOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(collectOrders);
                    }
                })
        }
    };

    const handleApprove = (id) => {
        fetch(`https://immense-taiga-30421.herokuapp.com/myOrders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0 || data.matchedCount > 0) {
                    setApprove(true);
                }
            })
    };
    console.log(allOrders)

    return (
        <div className="container table-responsive">
            <h2 className="text-center text-success my-4">All Orders</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service Id</th>
                        <th scope="col">Service</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                {
                    allOrders?.map(order => <tbody
                        key={order._id}
                    >
                        <tr>
                            <th scope="row">{allOrders.indexOf(order) + 1}</th>
                            <td>{order?._id}</td>
                            <td>{order?.service.name}</td>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td><button onClick={() => handleDelete(order?._id)} className="btn-regular rounded"><i className="fas fa-times-circle"></i>   delete</button></td>

                            {
                                order.status !== 'approved' ? <td><button onClick={() => handleApprove(order?._id)} className="btn btn-danger">approve</button></td> :
                                    <td><button onClick={() => handleApprove(order?._id)} className="btn btn-success"><i className="fas fa-check-circle"></i>    approved</button></td>
                            }
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageOrders;