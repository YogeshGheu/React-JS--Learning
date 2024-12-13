import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(10)
  
  const addValue = () => {
    if(count==20) return;
    setCount(count + 1)
  }
  const removeValue = () => {
    if(count==0) return;
    setCount(count-1)
  }


  return (
    <>
      <h1>Counter</h1>
      <h3>Counter Value: {count}</h3>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
