
. create vite project 
-----------
npm create vite@latest
----------


we can directly switch to our main code as 
------------
code -r useEffect
-----------
or 
we can customly move to main folder as 
-----------
cd useEffect
-----------

-----------useEffects----------------

. hooks which are best for sideeffects
. whenever we render our components then 
  data must be fetch or data will be fetch from the database 

. Example : 
   1. we want to make an alert whenever 
      we run the command of 
      ---------
      npm run dev
      --------
   2. so , we have to type 
      ----------
      useEffectSnippet
      ---------
   3. and also we have to import useEffect as we are 
      importing useState from react
-----------------
   4. so finally , whenever we load our page we got the same
      alert of wellcome 
      ----------------
      useEffect(() => { alert("Wellcome")}, [])
      --------------- 
      this is the syntax of useEffect 
      and that array is the array , which contains those thing which will be trigger on those things inside the array whenever this useEffect calls

   5. so basically , useEffect is a hook it states that 
      whenever the component (app.jsx) mount or reloads , then show this alert 

--------------
   6. we can also apply another 
      useEffect which will be
      trigger when the count is clicked as
      -------------
      useEffect(() => { alert("Count is changed")}, [])
      ------------

  
. we can easily see that alert is coming twice time , i.e it has strict mode

. basically , in development strict mode 
  runs our code 2 times .
  first time , to check 
  second time , to run the real

.if we comment out the 
 <strictmode></strictmode>
 then our alert's got normal

. so basically , 
  1. the first useEffect is
     used to show alert when the component is loaded  i.e App.jsx is rendered 
  2. the second useEffect is triggered
     when the count is hit 
  
. Again explaination in easy way :

  1. when we load the page  , we see two 
     alert messages first one is "wellcome" and the second is of "count is changed"
  2. so basically both useEffects got 
     trigger in App.jsx


. cleanup un mounted function 
--------------
return()=>{}
--------------
this return function will be written inside that useEffect and it will be trigger when the component is unmounted


