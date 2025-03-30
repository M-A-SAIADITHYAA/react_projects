import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter,setCounter] = useState(15)
  const addValue = () => {
   setCounter(counter+1)
  }
  const decreaseValue = () =>{
    setCounter(counter-1)
  }


  
  return (
    <>
   
      <h1>React thsi sai {counter}</h1>
      <h2>Counter</h2>

      <button onClick = {addValue}>  Add value</button>
      
      <button onClick = {decreaseValue}>  remove the ab</button>
      <p>Foote:{counter}r</p>
    </>
  )
}

export default App
