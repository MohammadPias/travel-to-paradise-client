import React from 'react';
import { useParams } from 'react-router';

const MyOrders = () => {
    const id = useParams();
    return (
        <div>
            <h3>This is Order page {id}</h3>
        </div>
    );
};

export default MyOrders;