import React from 'react'
import "../styles/ListItem.css";



function ListItem({title, description,price}) {
  return (
    <div className='list-items'>
      <ul className='un-list'>
        <li className='list-list'>

            
            <div> 
                <h3>{title} </h3>
                {description && <h4>{description} </h4> }
            </div>

<h3> {price} kr </h3>
        </li>
      </ul>
    </div>
  )
}

export default ListItem
