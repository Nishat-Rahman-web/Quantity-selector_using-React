import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";


function App() {
  const [count, setCount] = useState(1)
  const handleadd = ()=>{
    setCount(count + 1)
  }
  const handleremove = ()=>{
    setCount(count - 1)
  }
  
  return (
    <>
      <div className=" bg-white p-5 rounded-md shadow-lg shadow-indigo-500/40  flex gap-5">
        <button onClick={handleremove} className=' bg-white text-black p-2 border-2 border-solid border-pink-500 rounded-md hover:bg-pink-500 hover:text-white  transition-all'><TiMinus /></button>
        <h1 className='text-3xl font-semibold font-serif text-black'> {count} </h1>
        <button onClick={handleadd} className=' bg-white text-black p-2 border-2 border-solid border-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition-all'><FaPlus /></button>
      </div>
     
    </>
  )
}

export default App
