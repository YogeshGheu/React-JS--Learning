import { useState } from 'react'
import Child from './components/Child'

import './App.css'

function App() {
  const [list, setList] = useState(["apple", "mango", "kiwi", "banana", "orange"])
  const [selectedFruit, setSelectedFruit] = useState("")

  const handleFruitSelect = (fruitName) => {
    setSelectedFruit(fruitName)
  }

  return (
    <>
      <Child props={list} onSelect={handleFruitSelect} />
      <h3>{selectedFruit && `Selcted Value is: ${selectedFruit}`}</h3>
    </>
  )
}

export default App
