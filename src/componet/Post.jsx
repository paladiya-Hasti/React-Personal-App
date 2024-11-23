
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Post = ({ addPost, posts, updatePost }) => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const post = posts.find((post) => post.id === parseInt(id));
      console.log(post);
      
      if (post) {
        setTitle(post.title);
        setImg(post.img);
        setPrice(post.price);
        setDescription(post.description);
      }
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: id ? parseInt(id) : Date.now(),
      title,
      img,
      price,
      description,
    };

    if (id) {
      updatePost(newPost); 
    } else {
      addPost(newPost); 
    }

    setTitle('');
    setImg('');
    setPrice('');
    setDescription('');

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Create Blog</h1>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <label htmlFor="img">Image URL:</label>
      <input
        type="text"
        id="img"
        name="img"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Enter image URL"
      />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      ></textarea>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Post;
