import React from 'react';

const SelectedItem = props => {
    const {cart} = props;
    return (
        <div>
             <div>
                 <img src={cart.picture} alt="" />
                 <span>{cart.name}</span>
             </div>

        </div>
    );
};

export default SelectedItem;