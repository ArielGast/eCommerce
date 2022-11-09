import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

const Card = ({ item}) => {
    const { id, name, image, price, description} = item;
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/category/${id}`, { state: item });
    }
    return (
        <div onClick={handleDetail} className="card">
            <div className="card-image-container">
                <img className="card-image" src={image} alt={item.name} />
            </div>
            <div className="card-content">
                <p className='card-name'>{name}</p>
                <p className='card-name'>{description}</p>
                <p className='card-type'>$ {price}</p>
                <p className='card-id'>Id:{id}</p>
            </div>
        </div>
    )
};

export default Card;