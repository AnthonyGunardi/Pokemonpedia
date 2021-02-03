import React from 'react'

function Image (props) {
  return <img src={props.image} className="hover:animate-bounce" alt={props.name}/>
}

export default Image