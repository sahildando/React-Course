import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Sahil",
    age: 20
  }

  let newArr = [1,2,3]

  return (
    <>
 <h1 className='bg-green-400 text black p-4 rounded-xl mb-4'>Tailwind Configuration</h1>
 <Card channel="Sahil React Series" someObje={myObj} />
 <br />
 <Card />


    </>
  )
}

export default App
