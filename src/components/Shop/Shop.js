import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import RandomBest from '../RandomBest/RandomBest';
import SelectedItem from '../SelectedItem/SelectedItem';
import Warning from '../Warning/Warning';
import './Shop.css';

//Shop component to display all products and cart
const Shop = () => {
    const [products,setProduct] = useState([]);
    const [cart, setCart] = useState([]);


     //Removing Duplicate items and adding only 1 unique item 
     const onlyUnique =(value,index,self)=>{
        return self.indexOf(value) === index;
     }


    const addToCartHandler = (item)=>{
        const newCart = [...cart,item];
        const newUniqueCart = newCart.filter(onlyUnique);
        setCart(newUniqueCart);
    }


    
    //Random Item Choosing Handler
    const [randomCart,setRandomCart] = useState([]);
    const [randomPic,setRandomPic] = useState([]);
    const [chooseStatus,setChooseStatus] = useState(false);
    const chooseOne = ()=>{
          let random = Math.floor(Math.random()*cart.length);
          const randomCart = cart[random].name;
          const randomPic = cart[random].picture;
          setRandomCart(randomCart);
          setRandomPic(randomPic); 
          for(var i = 0; i<cart.length;i++){
            delete cart[i];
        }    
    }

   

//Removing random items
   const removeRandomCart =  ()=>{
       setRandomCart([]);
       setRandomPic([]);
   }
    // Removing items
    const [status,setStatus] = useState(true);
     const removeCart = ()=>{
        const empty = [];
        //Making the remaining cart empty
        setCart(empty);
     }
    //Getting data from json file
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setProduct(data));
    },[])
    
    return (
        <div>
            <h1>Welcome to <span className='store-name'>Luxury Store</span></h1>
            <h3>Please choose any 4 items</h3>
            <div className='shop-container'>
                <section className='products-container'>
                        {
                            products.map(product=><Product key={product.id} product={product} handler={()=>{
                                addToCartHandler(product);
                                setStatus(true);
                                setChooseStatus();
                                                             
                            
                            }}></Product>)
                        }
                </section>

                <section className='cart-container'>
                        <h2 >Selected Items</h2>
                        <div className='selected-items-container'>   
                                    {
                                          status? (() => {
                                            if (cart.length <= 4) {
                                                
                                                    return (
                                                        cart.map(singleItem=><SelectedItem  key={singleItem.id} cart={singleItem}></SelectedItem>)
                                                    )
                                            }   else{
                                                
                                                return(
                                                    // Showing warning message for adding more than 4 items 
                                                    <Warning></Warning>
                                                    
                                                )
                                               
                                            }
                                        })():null
                                    }

                                         
                        </div>

                                    {/* After adding 4 items these two button will appear */}
                        {
                                           (() => {
                                            if (cart.length === 4) {
                                                    return (
                                                       <div>
                                                            
                                                            {
                                                                status?<RandomBest randomPic={randomPic} randomCart={randomCart} chooseStatus={chooseStatus}></RandomBest>: null
                                                            }
                                                            
                                                            <button className='first-btn' onClick={
                                                                ()=>{
                                                                    chooseOne();
                                                                    setChooseStatus(true); 
                                                                    
                                                                }
                                                                
                                                                } >Choose One For Me</button> 
                                                            <button className='second-btn' onClick={
                                                                ()=>{
                                                                    setStatus(false);
                                                                    removeCart();
                                                                    removeRandomCart();
                                                                }
                                                                
                                                                }>Choose Again</button>
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