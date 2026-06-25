
----------Conditional Rendering-----------

. how to render lists in react 
. we have to use the ternary operator
. if we want to make a button and for 
  this we have to make a state and a function which changes that state and its default value will be false 
  ----------------------------
  const [showbtn , setshowbtn] = useState(false)
  ----------------------------
  and we want to show our button only when the default value will be true 
  so , for this we will make a ternary operator 

. so for this we have to type 
 -------------------------------------
 const [showbtn , setshowbtn] = useState(false)
 {showbtn?<button>Button is show......</button> ? "nothing"}
 -------------------------------------
 it explains that show this showbtn when the condition is true otherwise show  " "
 and also we use {} , because we are using js 

 OR 

 we can also use another way to do the same logic as 
 -----------------------------
 {showbtn && <button>Button is show......</button>}
 -----------------------------
 this also implies the same logic 


. if we apply the logic of when we press the button of count 
  then the btn will be shown , so we have to type 
  -----------------------------
  onClick={() => setshowbtn((!showbtn))}
  -----------------------------
  instead of the counter logic , we have to put this 

. and if we want to show the button when the showbtn is true
  otherwise show the button that shownbtn is false 
  ---------------------------
  {showbtn?<button>shownbtn is true</button>:<button>shownbtn is false</button>}
  ---------------------------


-----------component within the file-----------------

. we can also make a custom component inside the main file as
  inside the App function and  
  ------------------------------
  const Todo = ()=>{
    return (
    <div className="todo">
    this is a todo list
    </div>
    )
   }
  ----------------------------
  then call it inside the return statement as 
  -----------------------
  <Todo/>
  ----------------------



---------------rendering the list---------------------

. first we have to take the props  named as todo and then 
  take the props title as todo.title
  ----------------------
  const Todo=({todo})=>{
    return(<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </>)
  }
  ---------------------
  and inside return statement we use 
  ---------------------------------
  <Todo title="mini component Todo" desc="this is a mini component todo which contains title and description "/>
  ---------------------------------

. we can also gave props in state and also gave some initial
  values as 
  ----------------------------------
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
  -----------------------------
  to display these todo' we have to use .map 
  as we know that in react , to render list we have to use .map technique
  -----------------
  {todo.map(todo=>{
    return <Todo todo={todo}/>
  })}

. let add these Todo component return statements in a div and gave it classes of margin 4 and border 1px solid black

. when we use .map , we have to use return the component in 
  this format 
  --------------
  <Todo todo={todo}/>
  --------------
  and here we also have to use key in which we have to type unique data i.e id etc

. it is not necessary that to make a todo component and then
  return that component , we can direct return the whole div which contains title and desc

. there is an important point and that is , don't start the 
  div from next line after return 