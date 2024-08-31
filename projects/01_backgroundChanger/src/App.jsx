import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
   <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>
          <button 
            onClick={() => setColor('red')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "red"}}
          >
            Red
          </button>

          <button 
            onClick={() => setColor('green')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "green"}}
          >
            Green
          </button>

          <button 
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Blue"}}
          >
            Blue
          </button>

          <button 
            onClick={() => setColor('orange')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "Orange"}}
          >
            Orange
          </button>

          <button 
            onClick={() => setColor('yellow')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
            style={{backgroundColor: "yellow"}}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
   </>
  )
}

export default App
