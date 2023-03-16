import React, { useState } from "react";
// import Counter from "./companents/Counter";
import './styles/App.css'
import PostList from "./companents/PostList";
import MyButton from "./companents/UI/button/MyButton";
import MyInput from "./companents/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'C#', body: 'Description 2' },
    { id: 3, title: 'C++', body: 'Description 3' }
  ])

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      title,
      body
    }
    console.log(newPost);
  }

  return (
    <div className="App">
      <form onSubmit={addNewPost}>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          required
          placeholder="title of post" />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder="description of post" />
        <MyButton type="submit">Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of posts" />
    </div>
  );
}

export default App;
