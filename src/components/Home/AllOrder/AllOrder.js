import React from 'react';

const AllOrder = ({ order }) => {
    console.log(order)
    return (
        <tbody>
            <tr>
                <td scope="row">{order?._id}</td>
                <td>{order?.service.name}</td>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td><button className="btn-regular">update</button></td>
                <td><button className="btn-regular">delete</button></td>
                <td><button className="btn-regular">approve</button></td>
            </tr>
        </tbody>
    );
};

export default AllOrder;