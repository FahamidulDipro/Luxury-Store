import React from 'react';

const RandomBest = (props) => {
    const {randomPic,randomCart,chooseStatus} = props;
    return (
        <div>
                {
                    chooseStatus? <div className='random-item-container'>
                    <h3>We found the best item for you !!!</h3>
                    <div className='random-item-img-container'>
                        <img src={randomPic} alt="" /> <span>{randomCart}</span>
                    </div>
                   
                                                              
                 </div>:null
                } 
        </div>
    );
};

export default RandomBest;