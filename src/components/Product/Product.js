import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
const Product = props => {
    //Using Destructuring to access object properties
    const {product,handler} = props;
    const {picture,name,price} = product;
    return (
        <div className='single-product-container'>
            <div className='image-container'>
            <img src={picture} alt="productImage" />
            </div>
             <h3>{name}</h3>
             <p><b>Price: </b>{price}</p>
             <button className='addToCart-btn' onClick={handler}>Add To Cart  &nbsp;<FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;