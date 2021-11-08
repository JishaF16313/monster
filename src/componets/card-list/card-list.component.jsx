import React from 'react';
import "./card-list.styles.css";
import {Card} from "./card.component"
const CardList=(props)=> {
    console.log(props)
    return (
        <div className="card-list">
             {props.monsters.map((m,i)=>{
return(
  <div key={i}><Card monster={m}/></div>

)
      })}
        </div>
    )
}
export default CardList ;