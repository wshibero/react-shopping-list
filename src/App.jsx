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
  const deleteElement = (targetIndex) =>{
    let item_total = shoppingList[targetIndex].total
    setTotal(total - item_total)
    const arr = shoppingList.filter((_, index) => index !== targetIndex)
    setShoppingList(arr)
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
              />
            <label>Quantity</label>
            <input 
              type="number"
              min="0"
              placeholder='quantity'
              value={quantity}
              onChange={(e)=>setQuantity(e.target.value)}
              />
            <label>Price</label>
            <input
              type="number"
              min="0.0"
              placeholder='price'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              />
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
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {shoppingList.map((item, index)=>{
                  return(
                    <tr key={index}>
                      <td>{item.item}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                      <td>{item.total}</td>
                      <td className='deleterow'>
                        <button
                          className="deletebtn"
                          onClick={() => deleteElement(index)}
                          >Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p>The total amount you must spend is {total}</p>
          </div>
        )
      }
    </main>
  )
}
