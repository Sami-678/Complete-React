
-----------Hooks and States-----------

. first we have to create a new vite app
  by running the command as : 
  --------------
  npm create vite@latest
  --------------

. as we know that react is SPA (single 
  page application)


------------HOOKS-----------

. in general , hooks are basically the 
  functions 
. these functions help us to use react 
  features while staying in functional components
. Example : 
  -----------
  useState(0)
  ----------
  here , useState(0) is a function that provides an array which includes a state and a function which update that state 
  ----------------------
  const [count , setCount] = useState(0)
  ----------------------
  here  , 
  . we are telling that make a state 
    -----------
    count
    ---------
  . the initial value of that state is 0
    -----------
    useState(0)
    -----------
  . and then use a function that changes
    the state
    ----------
    setCount
    ----------


. so that we can apply all airthematic rules in that count and setcount

. we can't use this approach 
-----------
let a = 0 
onClick={()=>{a = a + 1}}
--------------
this is normal js code 


--------------Additional Built in Hooks ----------------

. useState (most usefull hook in reacts)
. useEffects (most usefull  hook in react)
. useRef 
