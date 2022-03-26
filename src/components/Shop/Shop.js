import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import SelectedItem from '../SelectedItem/SelectedItem';
import Warning from '../Warning/Warning';
import './Shop.css';
const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCartHandler = (item)=>{
        const newCart = [...cart,item];
        setCart(newCart);
    }
    //Random Item Choosing Handler
    const [randomCart,setRandomCart] = useState([]);
    const [randomPic,setRandomPic] = useState([]);
    const chooseOne = ()=>{
          let random = Math.floor(Math.random()*cart.length);
          const randomCart = cart[random].name;
          const randomPic = cart[random].picture;
          setRandomCart(randomCart);
          setRandomPic(randomPic);
          
            
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
                                           (() => {
                                            if (cart.length <= 4) {
                                                    return (
                                                        cart.map(singleItem=><SelectedItem  key={singleItem.id} cart={singleItem}></SelectedItem>)
                                                    )
                                            }   else{
                                                return(
                                                    <Warning></Warning>
                                                )
                                               
                                            }
                                        })()
                                    }

                                         
                        </div>

                                    {/* After adding 4 items these two button will appear */}
                        {
                                           (() => {
                                            if (cart.length === 4) {
                                                    return (
                                                       <div>
                                                            
                                                           <div className='random-item-container'>
                                                               <h3>We found the best item for you !!!</h3>
                                                               <div className='random-item-img-container'>
                                                                    <img src={randomPic} alt="" /> <span>{randomCart}</span>
                                                               </div>
                                                              
                                                            </div>
                                                            <button className='first-btn' onClick={chooseOne}>Choose One For Me</button> 
                                                            <button className='second-btn'>Choose Again</button>
                                                       </div> 
                                                    )
                                            } 
                                        })()
                        }



                        
                        
                </section>
            </div>
           
           
            
        </div>



    );
};

export default Shop;