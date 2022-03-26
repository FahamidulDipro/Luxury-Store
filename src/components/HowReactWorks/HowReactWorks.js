import React from 'react';
import './HowReactWorks.css';
const HowReactWorks = () => {
    return (
        <div className='qa-container'>
            <h2>How React Works?</h2>
            <p><b>Ans: </b>At very core level, React maintains a tree, which is able to do efficient and effective diff computations on the nodes. React works on its virtual DOM and that is more effective and easier than working on real DOM. React uses <b>JSX</b>(JavaScript XML) which is not actually HTML , but it looks similar to HTML. JSX syntax are translated to the low-level operations.</p>
            <p>Again, ReactDOM object renders the App component, which is also renders different components. ReactDOM , recursively creates nodes which depend on their 'type' property ,then it appends them finally to the DOM.</p> 
            <p>
             Data only flows One Way in React, A series of nested components  are used to organise the React App. 
            </p>
        </div>
    );
};

export default HowReactWorks;