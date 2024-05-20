import './App.css'
import {useState} from 'react'

export default function App() {
  const {item, setItem} = useState('')
  const {price, setPrice} = useState('')
  const {quantity, setQuantity} = useState('')
  let shoppingList = []
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert("submitted the data")
  }
  return (
    <main>
      <div>
        <h1>Shopping Cart program</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Shopping items form</legend>
            <label>Item</label>
            <input 
              type="text" 
              placeholder='Item'
              value={item}
              onChange={(e)=>setItem(e.target.value)}
              /><br/>
            <label>Quantity</label>
            <input 
              type="number"
              min="0"
              placeholder='quantity'
              value={quantity}
              onChange={(e)=>setQuantity(e.target.value)}
              />
            <br/>
            <label>Price</label>
            <input
              type="number"
              min="0.0"
              placeholder='price'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              />
            <br/>
            <input type="submit" value="submit"/>
          </fieldset>
        </form>
      </div>
      { shoppingList.length > 0 && 
        <div>
          <h2>Shopping List Items</h2>
        </div>
      }
    </main>
  )
}
