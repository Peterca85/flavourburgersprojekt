import React, { useContext} from 'react'

function Cart() {

const{cartItems,ListItem,removeFromCart} = useContext;

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
    <p>Artikel</p>
    <p>Namn</p>
    <p>Pris</p>
    <p>Antal</p>
    <p>Totalt</p>
    <p>Ta bort</p>
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <hr></hr>
        {ListItem && ListItem.map((data)=>{

          if(cartItems[data.id]>0){
              return(
                <div className='cart-items.title cart-items-item'>
                  <h1>{data.title}</h1>
                  </div>
              )
          }
        })}
      </div>
    
    </div>
  )
}

export default Cart
