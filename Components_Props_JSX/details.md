
           Vite 

. modern way to create react app using react app
. vite provides folder structure

---------------Commands for react---------------

----------------
npm create vite@latest
----------------


----------------App.jsx------------------

. as we move to app.jsx we can see , in 
  react every component is function 
. react is a library , not a framework 
. JSX is javascript + html 
   OR 
  we can use html in javascript
. we have to written only one main div ,
  i.e. which contains sub div's
. here we have to use className as class
  used in div 


-----------Components (Folder)------------

. first we have to create a folder of 
  components 
. inside that folder , we have to create 
  a file name as Navbar.jsx

-----------------For Navbar ------------------

. first we have to create a Navbar File
  in Components folder and then we to make a div having class navbar which contains one ul having 3 li's 
. for the styling of navbar , we have to 
  create another file name as navbar.css in that components folder 
. then we have to connect the Navbar.css 
  with Navbar.jsx as 
---------------
import "./Navbar.css"
---------------


--------------For Footer---------------

. for footer we will have to do the same 
  thing as we did in navbar 


-------------Making of card Component (main code )----------

. now we can do our code  , this will be the main code 

. first we have to make a file inside the 
  component folder as card.jsx
. then we have to type 
----------
rafce
----------

. as we create 4 cards , first by making
  a file name as card.jsx and make a div which contains title and description and by duplicating the card 4 times  in app.jsx 

. now I want to change the values in the 
  card we can do this by passing the props as 
  --------------
  <Card title="card-1" description="this is card 1 "/>
  --------------
  here these title and description are called props 
  and also we have to accept it on the card.jsx file functions as 
  --------------
  const card=(props)=>{
  <h1>{props.title}</h1>
  <p>{props.description}</p>
  }
  ----------------

. Explaination : 
 
  1. as we gave data in the component
     tag , that data
  2. so we get that data from props as
     an object


. it makes our code reuseable 
. instead of use class base approach to 
  handle the height and width we use inline styling 