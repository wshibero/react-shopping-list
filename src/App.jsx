import './App.css'
import {useState} from 'react'

export default function App() {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [shoppingList, setShoppingList] = useState([])
  const [total, setTotal] = useState(0)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setShoppingList([...shoppingList, {item: item, price: price, quantity: quantity, total: (price*quantity)}])
    setTotal(total+(price*quantity))
    setItem('')
    setPrice('')
    setQuantity('')
  }
  const deleteElement = () =>{
    setShoppingList(
      shoppingList.filter(x => x.id !== shoppingList.id)
    )
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
      { shoppingList.length === 0 ?(
          <div>
          <h2>There are no items in the shopping list</h2>
        </div>)
        :(
          <div>
            <h2>Items in the shopping list</h2>
            <table>
              <tr>
                <theader>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </theader>
              </tr>
              {shoppingList.map((item, index)=>{
                return(
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.total}</td>
                    <td>
                      <button
                        onClick={deleteElement}
                        >Delete</button>
                    </td>
                  </tr>
                )
              })}
            </table>
            <p>The total amount you must spend is {total}</p>
          </div>
        )
      }
    </main>
  )
}
