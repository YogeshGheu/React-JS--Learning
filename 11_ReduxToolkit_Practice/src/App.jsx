import { useDispatch, useSelector } from "react-redux"
import { addItem } from "./store/cartSlice"
import { useState } from "react"
import { nanoid } from "@reduxjs/toolkit"

function App() {

  const [itemName, setItemName] = useState("")
  const [itemCount, setItemCount] = useState("")
  const cartItems = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  const addItemToTheList = () => {
    dispatch(addItem({ itemId: nanoid(), itemName, itemCount }))
  }

  return (
    <>
      <div className="flex justify-start flex-col text-red-800">
        <div className="flex items-center justify-center flex-col text-red-800">
          <div className="text-4xl">Redux Cart</div>

          <div className="m-3">
            <span className="text-xl">Item Name</span>
            <input value={itemName} onChange={(e) => setItemName(e.target.value)} className="bg-red-800 p-2 mx-2 rounded-lg outline-none text-white" type="text" />
          </div>

          <div className="m-3">
            <span className="text-xl">Item Count</span>
            <input value={itemCount} onChange={(e) => setItemCount(e.target.value)} className="bg-red-800 p-2 mx-2 rounded-lg outline-none text-white" type="number" />
          </div>

          <div>
            <button onClick={addItemToTheList} className="bg-red-800 p-2 mx-2 rounded-lg outline-none text-white" type="button" >Add to Cart</button>
          </div>
        </div>

        <div className="flex flex-col">
          {cartItems.length ? cartItems.map((item) => (<span key={item.itemId}>{item.itemName} quantity is {item.itemCount}</span>)) : ""}
        </div>
      </div>

    </>
  )
}

export default App
