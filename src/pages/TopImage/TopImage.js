import React from 'react'
import "../../styles/TopImage.css";

function TopImage(props) {
  return (
    <div className='container-menu'
    style={{background: `url(${props.headerImage}) no-repeat bottom center/cover`,
    height:"40vh"
}}>

    <div className='banner-content'>
    <h1 className='heading-menu'>{props.heading} </h1>
    <p className='text-menu'>{props.text}</p>
    </div>
    
    </div>
  )
}

export default TopImage

