import React from 'react';
//import './card-list.style.css'
import {Card} from '../card/card.component'

export const CardList = props => (
     <div className="ma2">
        { props.monster.map( permonster => (
            <Card key = {permonster.id} monster ={permonster }/>
           
            ))
        }
    </div>
);