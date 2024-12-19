
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './store/storeSlice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state) => state.countValReducer)

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { dispatch(decrement()) }} style={{ margin: "10px" }}>-</button>
        <button onClick={() => { dispatch(reset()) }}>count is {count}. Click to Reset! </button>
        <button onClick={() => { dispatch(increment()) }} style={{ margin: "10px" }}>+</button>
      </div>

    </>
  )
}

export default App
