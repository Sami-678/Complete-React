
------------SOME MAJOR INTRO----------------

. SPA (Single Page App)
. use JSX (Javascript + HTML)
. whole website divided into components
. hooks 
. props 
. packages (routing (moving from one page to another without 
           reload))

--------------NEED TO INSTALL REACT -------------------

. NODEJS


-------------HWY THERE IS A NEED OF REACT---------------

. for example we are making 3 box whose classes are : 
     . box box-1 , box box-2 , box box-3
     . and we want to change the inner content of the boxes : 
     . as after 1 sec the content  of box-1 got changed and 
       same goes to rest with the increament of one second 
     . then we have to make the js code for each seperately 
     . so , this becomes a problem

. so , in react  , we have to just make a variable , which is applicable for all the boxes 


-----------------TOPICS IN REACT--------------

. stats in react (upper case of those 3 boxes)
. components (navbar , body , footer)
. props (variable which contains color , background property )





----Major Difference Btw React and NonReact Counter


. create a counter without react :

        1. at first we have to make a div which contain our 
           number initialy 0 , and a button whose text is  click me
        2. and make a js code inside that script tag , at 
           first we have to target the button using the doc.GEBI and then we have to apply the event listner (when we click on the button the increment occurs)
        3. as we can easily see the code contains too many 
           lines we can create this counter in react in a very easy way

. create a counter in react :

       1. to create react app we have to type :
          ------
          npx  create-react-app  with-react
          ------
       2. if we go on the package.json we can easily see the
          scripts we have to just type 
          -------
          npm start
          -------

. as we go in public folder we can easily see

. and in the src folder we can easily see there are file :
  App.js : in this file we can see header tag contains code 

. this is a JSX format code , which is converted into JS 



----------------------APP.JS-------------------



------------------STATES IN REACT-----------------------


---------UseState in React

1. first we have to import useState from React as :
-------------
import { useState } from 'react';
-------------

2. now we have to create a state inside the function and outside the return statement as ;
-------------------
const [value , setValue] = useState(0)
-------------------
this explains that :
  . create a state 
  . and in this state , we can change its value using the
    setValue function  
  . and after = useState(0) ,means make the value initially 0


3. and then we have to type {value} , in replacement of 
  this <h1>Hello , My Name is Sami</h1>

4. Explaination :
     . basically , we were creating a variable , in which we 
       can create its state using the function setValue

5. now we are making a button inside the app div (main div)
   and after the div having the class Value , which changes the state 

6. now we have to write the logic , in which when we click on 
   that button the value got increased

7. so for we have to write , this inside the opening tag of
   button 
------------
onclick={}
-----------

8. inside that {} , we have to first write an arrow function
   and inside that we have to write randomly , setvalue = 40 
-------------
()=>{setValue = 40 }
-------------

9. when we click on the button the value got changed from 0 to 40 

10. now we have to write the real function as :
----------------
()=>{setValue(value + 1)}
-----------------

11. now using this state and setvalue function , we will make 
    a button for delete 


-------------------COMPONENTS IN REACT--------------------

----------Navbar.js

. if we want to make a navbar , we can make it using 
  components of navbar and then import it 

. we can create a component and then reuse it again and again

. we have to just create a navbar , so we have to first create a file name as navbar.jsx and then we have to type 
---------------
rafce
--------------
in that file , this will create a custom boiler 

. now we have to create a div which contains ul and 3 li 
as div > ul > li *3

-------in App.js 

. and then we have to first write import statement
------------
   import Navbar from './Components/Navbar';
------------
   then we have to write the component as 
----------
    <Navbar/>
---------
   both of these work will be done in App.js file 

. there is a great benefit of this compoenents , 
  example , if we want to use the footer components into navbar, then we just have to use it inside the return statement of that navbar.jsx file 


---------------PROPS IN REACT----------------

. we can pass a special msg in the components as :

   1. if we want to create a text in logo , then first
      we have to make a div with class Logo , 
   2. then we have to write this inside our Navbar 
      component in App.jsx file  as 
      ----------
      logoText = "My First App"
      ----------
      so here we are telling that we are passing a prop which is string "My First App" 
   3. then we have to accept this props inside the 
      round bracket of Navbar function in Navbar.jsx file 
      ----------------
      Navbar = ({ logoText }) 
      ----------------
   4. so we can easily pass data in components using 
      these props 




------------------------------------------------------

. States 
. Components
. Props 

-------------why we use react-------------- 

1. We can use states which means that once we update 
   the state variable, it changes across the page  

2. We can split our app into multiple components
   and reuse those components

3. React uses a virtual DOM to efficiently update 
   the UI which is better than updating content using DOM Manipulation

4. Debugging and maintainance is easy


-------------props in react----------------

. we have to pass props in navbar component as a string :
-------------
logoText = "HelloSami"
-------------
. and accept this props in function curly bracket ({})
---------------------
const Navbar = ({logoText})=>{}
---------------------
. and then we tell the react to place that logotext in any where we want to place it , but inside the {}
-------------------
<div className="logo">{logoText}</div>
-------------------

OR 

. we can do one more thing and that is we can type props in {} as :
--------------
 const Navbar = ({props})=>{}
--------------
. then use it as 
----------------------
<div className="logo">{props.logoText}</div>
----------------------

. so basically , props is "passing of data in components"
