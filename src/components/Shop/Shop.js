import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProduct] = useState([]);

    const addToCartHandler = ()=>{
        console.log('clicked');
    }
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setProduct(data));
    },[])
    return (
        <div>
            <h1>Welcome to Luxury Store</h1>
            <p>Please choose any 4 items</p>
            <div className='shop-container'>
                <section className='products-container'>
                        {
                            products.map(product=><Product key={product.id} product={product} handler={addToCartHandler}></Product>)
                        }
                </section>

                <section className='cart-container'>
                        <h2>Selected Items</h2>
                        <div>
                            <p><b>Name:</b></p>
                        </div>
                </section>
            </div>
           
           
            
        </div>
    );
};

export default Shop;