import React from 'react';

function Dinner(props){
    return(
        <div>
            <h1>Restaurant of Imagination</h1>
            <h1>Today we are serving {props.dishName}</h1>
            <h1>Today we are sarving {props.sweetdishName}</h1>
        </div>    
    )
}
export default Dinner;

