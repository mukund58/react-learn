import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function counter() {
    setCount(count + 1)
  }
function counterDecrease() {
	    if (count <= 0) {
      return
    }
    setCount(count - 1)
  }
  return (
    <>
	  
	<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={counter}>Click To Increase count : {count}</button>
	  	<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={counterDecrease}>Click To Decrease count : {count}</button>
	  
	  <h1 className="text-3xl font-bold underline">{count}</h1>

    </>
  )
}

export default App
