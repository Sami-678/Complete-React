
. you have to use an api and display the data in the form of
  a card under a container . All hte data points returned by the API should be converted to a card

. make a container which contains cards 


. search "JSON placeholder"

https://jsonplaceholder.typicode.com/post

. HINT : 
    1. create a state for the data which will be fetched 
       using the JSON placeholder API
    2. inside useEffect , use fetch to populate that state 
       and then use map to render the cards from that state 

. Explaination  : 

   "useEffect ka use karte hue fetch API ke madad se iss link se data fetch karo aur phir populate kardo .map ki help se  "



---------------------useEffect---------------------

here , 

----------------------------------------
useEffect(() => { alert("Wellcome")}, [])
----------------------------------------

. useEffect is a hook it states that :
      " whenever the component (app.jsx) mount or reloads , then show this alert "

. Example : 

    1. if we create a button , 
    2. and after clickin that button our state becomes reload 
       and due to which the data using fetch api populates in the container of cards 
    3. such that :
        ---------------------
        useEffect(() => {
            alert("Count is changed")
            }, [count])
        ---------------------
        after return statement 
        ----------------------
        <button onClick={()=>{setCount(count + 1)}}>Change it </button>
        ---------------------


----------------Conditional rendering ----------------------

. to render list we use conditional rendering 

. if we want to make a button and for 
  this we have to make a state and a function which changes  that state and its default value will be false 
   ---------------------------------------
   const [showbtn , setshowbtn] = useState(false)
   {showbtn && <button>Button is show......</button>}
   --------------------------------------

------------------rendering the list ----------------------


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



---------------------Code Explaination-----------------------

1. first we create a Postcards function 
   -------------------
   function PostCards(){}
   -------------------

2. all the code will be held in this function
3. we create two states 
    . first state is to stores the data in an empty array 
    . second state is to trigger state either data is fetched 
      or not and its default value will be false
   ----------------------------
   const [posts, setPosts] = useState([]);  
   const [fetchData, setFetchData] = useState(false); 
   ----------------------------

4. then comes the function which fetches the data from api 
   --------------------------------
    const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); // Save data to posts state
        } catch (error) {
      console.error("Error fetching data", error);
     }
    }; 
   -------------------------------- 

5. then after the function we have to apply the useEffect on
   that function's calling  argument
   --------------------
   useEffect(() => {
    if (fetchData === true) {
      fetchPosts();
    }
   }, [fetchData]); // Correct dependency array 
   -------------------- 
   and it state that if fetch is true then get the data , as we change the fetch data using a button 

6. then comes the written statement and the rest of the code
   will be shown on ui so 
   -----------------
   return(...)
   -----------------

7. first we have to create a button which fetches the data 
   when the data is true as the setfetch function is false bydefault
   -------------------
   <button onClick={() => setFetchData(true)}>
        Load Posts
      </button>
   -----------------

8. then we have to make a div , which contains javascript 
   inside {} , inside that {} we use ternary operator as : 
   
   -------------------------------------------
     <div style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
        {posts.length === 0 ? (
          <p>No data loaded yet. Click the button!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
   -------------------------------------------
     
   .  before : we apply the condition that when post.length 
      === 0 , (means the first state is empty then show paragraph of no data loaded) 

   . after : use () for mapping html as 
    ----------------------
    (posts.map((post) => (
         <div key={post.id} style={{style....}}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
    ----------------------

---------------------Code Explaination-----------------------