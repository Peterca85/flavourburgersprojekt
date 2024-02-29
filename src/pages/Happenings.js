import React, { Component } from 'react'
import Happening from "../assets/dj.jpg";




function Happenings() {
  return (
    <div>
      <div className='HappeningImage'
            style={{ backgroundImage: `url(${Happening})` }}
            
            ></div>
            <div className='rubrik'><h1>hej hej</h1></div>
    </div>
  )
}

export default Happenings



