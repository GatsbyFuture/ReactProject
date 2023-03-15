import React, { useState } from "react";
// import Counter from "./companents/Counter";
import './styles/App.css'
import PostList from "./companents/PostList";
import MyButton from "./companents/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'C#', body: 'Description 2' },
    { id: 3, title: 'C++', body: 'Description 3' }
  ])

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="title of post" />
        <input type="text" placeholder="description of post" />
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts" />
    </div>
  );
}

export default App;
