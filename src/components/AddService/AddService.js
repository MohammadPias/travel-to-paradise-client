import React from 'react';
import { useForm } from "react-hook-form";
import './Addservice.css';
import map from '../../images/map.jpg';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Service Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="row container mx-auto row-cols-1 row-cols-md-2">
            <div className="map-container col">
                <div className="map-image">
                    <img src={map} alt="" />
                </div>
            </div>
            <form className="service-form col" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name")} />
                <br />
                <input placeholder="Country" {...register("country")} />
                <br />
                <input placeholder="Day" {...register("day")} />
                <br />
                <textarea placeholder="Description" {...register("description")} />
                <br />
                <input placeholder="PriceSingle" type="number" {...register("price-single")} />
                <br />
                <input placeholder="PriceCouple" type="number" {...register("price-couple")} />
                <br />
                <input placeholder="Rating" {...register("rating")} />
                <br />
                <input placeholder="Image url" {...register("img")} />
                <br />
                <input className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddService;