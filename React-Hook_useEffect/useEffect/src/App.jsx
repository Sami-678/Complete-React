import { useEffect, useEffectEvent, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    alert("Wellcome")
  }, [])
   useEffect(() => {
    alert("Count is changed")
  }, [count])

  return (
    <>
    <div className='CountValue'>
      the value of count is {count}
    </div>
    <button onClick={()=>{setCount(count + 1)}}>Change it </button>
    </>
  )
}

export default App
