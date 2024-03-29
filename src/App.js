import './App.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPostTitles() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data.map(post => post);
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPostTitles();

  }, []);  

  return (
    <div className='main-div'>
      <h1>Posts:</h1>
      {error && <p>Error: {error}</p>}
        {posts.map((post) => (
          <div className='posts-div'>
            <span className='post-span1' key={post.id}>Post №{post.id}</span>
            <span className='post-span2' key={post.id}>{post.title}</span>
            <span className='post-span3' key={post.id}>{post.body}</span>
          </div>
        ))}
    </div>
  );
}

export default App;
