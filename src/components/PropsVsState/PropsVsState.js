import React from 'react';
import './../HowReactWorks/HowReactWorks.css'
const PropsVsState = () => {
    return (
        <div className='qa-container'>
            <h2>Whate are the differences between props and states?</h2>
            
            <table>
                <thead>Difference between Props and State</thead>
                <tbody>
                    <tr>
                    <th><b>Props</b></th>
                    <th><b>State</b></th>
                    </tr>
                    <tr>
                        <td>In React,  <b>Props</b> are used to pass data from one component to another component</td>
                       <td>The <b>State</b> object in React is where we can store property values which belongs to the component</td>
                    </tr>
                    <tr>
                        <td><b>Props</b> are immutable</td>
                       <td><b>States</b> are mutable</td>
                    </tr>
                    <tr>
                        <td><b>Props</b> has better performance</td>
                       <td><b>States</b> don't have better performance</td>
                    </tr>
                    <tr>
                        <td><b>Props</b> are used  to pass data to child components</td>
                       <td><b>States</b> should be passed down with props instead</td>
                    </tr>
                     
                </tbody>
            </table>
        </div>
    );
};

export default PropsVsState;