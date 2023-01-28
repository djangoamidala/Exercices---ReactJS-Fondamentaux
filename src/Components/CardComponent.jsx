import React from 'react';
import './CardComponent.css';
const Card = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <h2 className="card__title">{props.title}</h2>
        <img src= {props.image} alt="product" className = "card__image"/>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
};
export default Card;
