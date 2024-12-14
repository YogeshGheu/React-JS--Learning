import { useState } from 'react'
import ColorBar from './components/ColorBar'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <ColorBar />
    </>
  )
}

export default App
