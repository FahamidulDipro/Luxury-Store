import React from 'react';
import './SelectedItem.css';
const SelectedItem = props => {
    const {cart} = props;
    return (
        <div>
             <div className='selected-img-container'>
                 <img src={cart.picture} alt="" />
                 <span>{cart.name}</span>
                 </div>
              

        </div>
    );
};

export default SelectedItem;