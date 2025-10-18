import { useState } from 'react'

function App() {
  const [colorbg, setColor] = useState("Black");

  return (
    <>
	  <div className="App" style={{ backgroundColor: colorbg, transition: 'background-color 0.5s ease', height: '100vh' }}>
	<h1 className="text-3xl font-bold text-center min-h-screen">
	  Background Color Change on Click
	</h1>
	  
	  <div className="flex flex-row items-top justify-center p-10 gap-5 absolute top-10 w-full bg-white/10 ">
	  	<button className="bg-green hover:bg-green-700 text-white  font-bold py-2 px-4 rounded border" onClick={()=> {setColor("Green")}} >Green</button>
	  	<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Blue")}>Blue</button>
	  	<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Red")}>Red</button>
	  	<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Yellow")}>Yellow</button>
	  	<button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Purple")}>Purple</button>
	  	<button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Pink")}>Pink</button>
	  	<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Gray")}>Gray</button>
	  	<button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"onClick={() => setColor("Black")}>Black</button>
	  	<button className="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded border"onClick={() => setColor("White")}>White</button>

	  	</div>
	  </div>
    </>
  )
}

export default App
