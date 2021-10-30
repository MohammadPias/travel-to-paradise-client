import React, { useState } from 'react';
import Rating from 'react-rating';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useServices from '../../../Hooks/useServices';
import './PlaceOrder.css'
import useAuth from '../../Context/useAuth';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const { services } = useServices();
    const { user } = useAuth();
    const [clear, setClear] = useState(true);

    const myService = services?.find(service => service._id === serviceId);
    // console.log(myService);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'pending';
        data.service = myService;
        fetch('https://immense-taiga-30421.herokuapp.com/myOrders', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.email) {
                    alert('Your order is placed successfully');
                    reset();
                    setClear(false)
                }
            })
    };
    console.log(clear);

    return (
        <div className="container my-4">
            {
                clear ?

                    <div>
                        {/* Card=============== */}
                        < div className="card mb-3 mx-auto" style={{ maxWidth: '75%' }}>
                            <div className="row g-5">
                                <div className="col-md-4">
                                    <img src={myService?.img} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{myService?.name}</h5>
                                        <p className="card-text">{myService?.description}</p>
                                        <h6>{myService?.day}</h6>
                                        <div className="price-section d-flex justify-content-between">
                                            <div className="single">Single Price: ${myService?.priceSingle}</div>
                                            <div className="couple">Couple Price: ${myService?.priceCouple}</div>
                                        </div>
                                        <p className="card-text">Rating:  <Rating
                                            initialRating={myService?.rating}
                                            emptySymbol="fa fa-star-o fa-x star-color"
                                            fullSymbol="fa fa-star fa-x star-color"
                                            readonly
                                        /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Form=============== */}
                        <form style={{ maxWidth: '50%' }} className="service-form mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} placeholder="Name" {...register("name")} />
                            <br />
                            <input defaultValue={user?.email} placeholder="Email" {...register("email")} />
                            <br />
                            <input placeholder="Address" {...register("address")} />
                            <input placeholder="Phone" type='number' {...register("phone")} />
                            <input className="submit-btn" type="submit" />
                        </form>
                    </div>
                    :

                    <div className="w-25 mx-auto">
                        <h2 className="text-center fw-bold mb-4">Your is placed successfully</h2>
                        <Link to="/home"><Button className="btn-regular w-100 mb-3">Home</Button></Link>
                        <br />
                        <Link to="/myOrders"><Button className="btn-regular w-100 mb-3">My orders</Button></Link>
                    </div>
            }
        </div >
    );
};

export default PlaceOrder;