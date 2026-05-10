import React from 'react';

const Product = (props) => {
  const newPrice = (props.price / 100).toFixed(2); 
    return (
        <div className="product">
            <img className="product-image" width="272" height="300" alt={props.name} src={props.image} />
            <p className="product-name">{props.name}</p>
            <div className="product-price">${newPrice}</div>
        </div>

    );
};

export default Product;