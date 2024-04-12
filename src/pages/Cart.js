import React, { useContext } from 'react'
import { StoreComponent } from '../components/StoreComponents'

function Cart() {

    const [cartItems,ListItem,removeFromCart] = useContext(StoreComponent)
  return (
    <div className='cart'>
      <div className='cart-items'>
      <div className='cart-items-title'>
      <p>Items</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantaty</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <br></br>
    <hr></hr>
    </div>
    </div>
  )
}

export default Cart
