import React from 'react';
import './product.css';
const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <img src= {props.image} class = "card__image"/>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
};
export default Card;
