import React from 'react';
import './Product.css';
const Product = props => {
    const {product,handler} = props;
    const {id,picture,name,price} = product;
    return (
        <div className='single-product-container'>
            <div className='image-container'>
            <img src={picture} alt="product-image" />
            </div>
             <h3>{name}</h3>
             <p><b>Price: </b>{price}</p>
             <button className='addToCart-btn' onClick={handler}>Add To Cart</button>
        </div>
    );
};

export default Product;