import React, { useState } from 'react'
import "../styles/ListItem.css";
import plusIcon from "../assets/plusicon.png"
import minusIcon from "../assets/redminusicon.png"
import greenPlusIcon from "../assets/greenaddicon.png"



function ListItem({title, description,price, itemImage}) {

const[itemCount, setItemCount] = useState(0)

  return (
    <div className='list-items'>
      <ul className='un-list'>
        <li className='list-list'>

            {itemImage && <img src={itemImage} alt="food"/>}

      
            <div> 
                <h3>{title} </h3>
                {description && <h4>{description} </h4> }

                {!itemCount
            ? <img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={plusIcon}></img>
            :<div className='food-item-counter'>
              <img className='remove' onClick={()=>setItemCount(prev=>prev-1)} src={minusIcon}></img>
              <p>{itemCount}</p>
              <img className='remove' onClick={()=>setItemCount(prev=>prev+1)}  src={greenPlusIcon}></img>

            </div>

            }
            </div>

<h3> {price} kr </h3>
        </li>
      </ul>
  
  </div>
  )
}

export default ListItem
