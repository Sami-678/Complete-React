import React, { useState, useEffect } from 'react';
import "./App.css"
function PostCards() {
  // 1. States
  const [posts, setPosts] = useState([]);  // Stores fetched array
  const [fetchData, setFetchData] = useState(false); // Trigger state

  // 2. Fetch Function
  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data); // Save data to posts state
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // 3. useEffect (Wakes up when fetchData changes)
  useEffect(() => {
    if (fetchData === true) {
      fetchPosts();
    }
  }, [fetchData]); // Correct dependency array

  return (
    <div style={{ padding: '20px' }}>

      {/* Button to trigger fetch */}
      <button onClick={() => setFetchData(true)}>
        Load Posts
      </button>

      {/* 4. Conditional Rendering & .map() */}
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

    </div>
  );
}

export default PostCards;