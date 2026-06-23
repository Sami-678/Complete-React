import { useLayoutEffect, useState, useEffect, useRef } from 'react'
import "./App.css"
function App() {
  const [count, setcount] = useState(0);
  const a = useRef(0);
  const btnRef = useRef();
  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering the Component and the value of a is ${a.current} `)
    btnRef.current.style.backgroundColor = "rgb(135, 233, 227)"
  });

  return (
    <>
      <div className='Counter'>
        <h1>Counter</h1>
        <div className="counter_display">
          the value of counter is
          <div className='ctn'> {count} </div>
        </div>
        <div className="btn-div" >
          <button ref={btnRef} onClick={() => { setcount(count + 1) }}>Increase</button>
          <button onClick={() => { btnRef.current.style.display = "none" }}>Hide Button</button>
          <button onClick={() => { btnRef.current.style.display = "block" }}>Show Button</button>
        </div>
      </div>

    </>
  )
}

export default App
