import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [allowedCharacter, setAllowedCharacter] = useState(false);
  const [allowedNumber, setAllowedNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [copied, setCopied] = useState(false);


	const generatePassword = () =>{
		let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	        let numbers = "0123456789";
		let symbols = "!@#$%^&*()_-+=<>?/{}~";

		let allowed = chars;
   		if (allowedNumber) allowed += numbers;
	   	if (allowedCharacter) allowed += symbols;

		let pass = "";
		for (let i = 0; i < length; i++) {
			const randomIndex = Math.floor(Math.random() * allowed.length);
			pass += allowed[randomIndex];
		}
		setPassword(pass);
	};
         	 useEffect(() => {
    		generatePassword();
	 	 }, [length, allowedCharacter, allowedNumber]);
	  const copyToClipboard = () => {
   		 navigator.clipboard.writeText(password);
   		 setCopied(true);
    		setTimeout(() => setCopied(false), 1500); // Reset "copied" message
  	};



  return (
    <>

	  <h1 className='text-3xl font-bold  m-4 position-absolute top-0 '>
	    Password Generator 
	  </h1>
	  	<div className='container bg-black border rounded-md p-4'>
	  	<div className="box">
	  		Password : <input type='text' readOnly name='length' className='bg-white text-black w-90' value={password}  />  
	  	</div>
	  <button onClick={generatePassword} className="ml-2 bg-blue-500 text-white px-2 py-1 rounded" >Refresh</button>
	<button    onClick={copyToClipboard} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded" > Copy  </button>

          {copied && <span className="text-green-400 ml-2">Copied!</span>}
	        <div className="container flex flex-col content-center justify-start m-4 align-center">
	  	
	  	
	  	<div className="box flex flex-row content-center  align-center m-1" >
	  
	  		Length : <input type='range' min="4" max="20" value={length} name='length'  onChange={(e) => setLength(e.target.value)} />{" "}{length} 
	  
	  	</div> 
	  		
	  	<div className="box flex flex-row content-center justify-start m-1 align-center">
	  		Charater : <input type='checkbox' name='length' checked={allowedCharacter} onChange={()=> setAllowedCharacter((prev) => !prev)} />  

	  	</div> 
	  	<div className="box flex flex-row content-center justify-start m-1 align-center ">
	  		Numbers : <input type='checkbox' name='length' className='bg-white text-black' checked={allowedNumber} onChange={() => setAllowedNumber ((prev) => !prev)} />  
	  	</div> 

	  </div>
  
	  </div>
	</>
  )
}

export default App
