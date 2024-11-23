
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Post from "../../componet/Post";
import EditPost from "../Editpost";
import Login from "../Login";
import PrivateRoute from "../PrivateRouter";

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleLogin = () => setIsAuthenticated(true);
  
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEdit = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  return (
    <Routes>
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
     
      <Route
        path="/"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Home posts={posts} handleDelete={handleDelete} />
          </PrivateRoute>
        }
      />
      <Route
        path="/post"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Post addPost={addPost} />
          </PrivateRoute>
        }
      />
    
<Route
        path="/edit/:id"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <EditPost posts={posts} handleEdit={handleEdit} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
