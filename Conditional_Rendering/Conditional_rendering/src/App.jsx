import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todo , setTodos] = useState([
    {
      title : "Hey",
      desc : "I am good todo"
    } ,
    {
      title : "Hey , this is second todo",
      desc : "I am another good todo"
    } ,
    {
      title : "Hey , this is third todo",
      desc : "I am third good todo"
    }]
  )
  const Todo = ({todo})=>{
    return(<>
    <div className="border border-white-400">
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </div>
    </>)
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
       {todo.map(todo=>{
        return<Todo key={todo.title} todo={todo}/>
       })}
        <button
          type="button"
          className="counter" 
          onClick={() => setshowbtn((!showbtn))}
        >
          Count is {count}
        </button>
        {/* show button when condition is true  other wise false*/}
        {/* {showbtn && <button>Button to show only when we click it</button>} */} 
        {showbtn?<button>shownbtn is true</button>:<button>shownbtn is false</button>}
      </section>
    </>
  )
}

export default App
