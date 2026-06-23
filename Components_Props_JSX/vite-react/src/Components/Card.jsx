import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} width={270} height={180}/>
        <h3>{props.title}</h3>
        <div className='details'>{props.description}</div>
    </div>
  )
}

export default Card