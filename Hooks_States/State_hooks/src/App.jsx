import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 return (
    <>
      <div className='countValue'>the Count is {count}</div>
       <button onClick={()=>{setCount(count+1)}}>Increase</button>
       <button onClick={()=>{setCount(count-1)}}>Descrease</button>
    </>
  )
}

export default App
