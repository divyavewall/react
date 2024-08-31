import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card username='delba debian' btnText='visit profile'/>
      <Card username='harry'btnText='open profile'/>
    </>
  )
}

export default App
