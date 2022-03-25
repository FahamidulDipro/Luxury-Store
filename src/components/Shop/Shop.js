import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import './Shop.css';
const Shop = () => {
    const [products,setProduct] = useState([]);
    // const [productName, setProductName] = useState([]);
    // const [productPic, setProductPic] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCartHandler = (item)=>{
    
        // const productName = item.name;
        // const productPic = item.picture;
        // setProductName(productName);
        // setProductPic(productPic);
        const newCart = [...cart,item];
        setCart(newCart);
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
                            products.map(product=><Product key={product.id} product={product} handler={()=>addToCartHandler(product)}></Product>)
                        }
                </section>

                <section className='cart-container'>
                        <h2>Selected Items</h2>
                        <div className='selected-items-container'>   
                                {/* <span> <b>{cart.length}</b></span> */}
                              
                                    {
                                        cart.map(singleItem=><SelectedItem  key={singleItem.id} cart={singleItem}></SelectedItem>)
                                    }    
                        </div>
                        
                </section>
            </div>
           
           
            
        </div>



    );
};

export default Shop;