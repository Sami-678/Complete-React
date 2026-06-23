
. create react app 
--------------
npm create react@latest
--------------

. whenever we change our state on click it then our whole 
  component will be rerender 

. if we use 
  ---------------------
  useEffect(()=>{console.log("rerendering the component)})
  ---------------------
  then this hook will be shown whenever our component will be rerender

. Example : 

-------------usecase  no 1

   . if we make a component of counter and then whenever we
     click on increase button then our counter increase 1 value , and also at the same time our useEffect hook rerender and on every click our whole component got rerenders 
   . it happens , beacause when the state changes the 
     component got rerenders

   . if we type 
     ------------
     let a = 1
     -----------
     and on useEffect console statement we put the variable using template literals as 
     -----------
     useEffect(() => {
       console.log("rerendering the Component ${a}")
       })  
     -----------
     and apply some logic of increament as 
     ----------------------
     let a = 1 
     a = a + 1
     ----------------------
     then according to js our value at "a" should have to increase but , this will not happens 
     
    . because , when the count button is pressed then the 
      component will be rerender then the whole code runs again and due to which the value of a becomes 0 and in next line the value becomes 1 due to a = a + 1 and shown in the console statement and due to this whole process of rerenderin the value of a will be 0 

    . to solve this problem react gave us a hook useRef and 
      it state that use this as 
      ----------------
      const a = useRef(0)
      a.current = a.current + 1
      -----------------

    . so basically , we have to 
      ----------------------------  
      const a = useRef(0) ;
      useEffect(() => {
         a.current = a.current + 1
         console.log(`rerendering the Component and the value of a is ${a.current} `)
        });
      ----------------------------
 
    . if we change the state then component rerenders , but
      in the case of useRef , if we change it so , it will not be rerender
    

-----------usecase no 2 

    . we can also use useRef to change color or to change 
      innnerhtml on clicking any button , just like we did ( DOM manupilation in js )
      -------------------------------------
       const btnRef = useRef();
       useEffect(() => {
       a.current = a.current + 1
       btnRef.current.style.backgroundColor="rgb(135, 233, 227)"
       });
      -------------------------------------

    . also we can use this useRef in arrow function and call
      this arrow function on onClick 
 
      ----------------------------
      const btnRef = useRef();
      useEffect(() => {
      a.current = a.current + 1
      console.log(`rerendering the Component and the value of a is ${a.current} `)
      btnRef.current.style.backgroundColor = "rgb(135, 233,  227)"
      });
      return 
       <div  className="btn-div" >
        <button  ref={btnRef} onClick={()=>{setcount(count + 1)}}>Increase</button>
        <button onClick={()=>{btnRef.current.style.display = "none"}}>Hide Button</button>
        <button onClick={()=>{btnRef.current.style.display = "block"}}>Show Button</button>
        </div>
      ----------------------------

. so this solves our problem of DOM manupilation 

for refrence read react doc 