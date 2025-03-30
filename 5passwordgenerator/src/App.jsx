import { useCallback, useState,useEffect ,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



function App() {
  const [length, setlenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied,setIsCopied] = useState(false)
  const passwordRef = useRef(null)
  const copied = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz"

    if(numberAllowed) string+="0123456789"
    if(charAllowed) string +="!@#$%^&*()"

    for(let i = 1;i<length;i++){
     const char = Math.floor( Math.random()*string.length+1)
     pass+=string.charAt(char)
    }
    setPassword(pass)
    setIsCopied(false)


  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
    generatePassword()

  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = ()=>{
    
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    // copied.current.textContent="copied"
    
    setIsCopied(true)

    
    // console.log(window.navigator.readOnly)
  }
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md
rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500"
      >
        <h1
          className="text-3xl font-bold mb-2
text-center"
        >
          Password Generator
        </h1>
        <div
          className="flex shadow rounded-lg overflow-hidden
mb-4"
        >
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          ref ={copied}
          
            className={`outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${isCopied?'text-green-300 font-bold text-2x1':'text-2x1 text-red-600'}`}
           onClick={copyPasswordToClipboard}
           >
            {isCopied?"Copied!":"copy"}
            
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlenght(e.target.value)}
          />
          <label htmlFor="length">lenght:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() =>{

            setNumberAllowed((prev) =>!prev)}}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
