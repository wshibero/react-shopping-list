import './App.css'

export default function App() {
  // const {item, setItem} = useState('')
  // const {price, setPrice} = useState('')
  // const {quantity, setQuantity} = useState('')
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
              placeholder='Item' /><br/>
            <label>Quantity</label>
            <input 
              type="number"
              min="0"
              placeholder='quantity'
              />
            <br/>
            <label>Price</label>
            <input
              type="number"
              min="0.0"
              placeholder='price'
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
