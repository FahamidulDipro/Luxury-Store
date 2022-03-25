import React from 'react';
import './Warning.css';
const Warning = () => {
    return (
        <div className='warning-container'>
            <h2 className='warning-msg'>Warning!!! You can't add more than four items at a time! </h2>
        </div>
    );
};

export default Warning;