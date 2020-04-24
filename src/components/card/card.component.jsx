import React from 'react';
//import './card.styles.css'

export const Card = (props) => (
    //<div className="card-container">
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
    
       <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Funky Monsters"/>
        <h2> 
            {props.monster.name}
        </h2>
        <p>
            {props.monster.email}
        </p>
    </div>
)
