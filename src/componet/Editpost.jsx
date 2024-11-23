
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'

const EditPost = ({ posts, handleEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const postToEdit = posts.find((post) => post.id === parseInt(id));
  const [title, setTitle] = useState(postToEdit?.title || '');
  const [img, setImg] = useState(postToEdit?.img || '');
  const [price, setPrice] = useState(postToEdit?.price || '');
  const [description, setDescription] = useState(postToEdit?.description || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = { id: parseInt(id), title, img, price, description };
    handleEdit(updatedPost);
    navigate('/'); 
    
  };

  return (
    <div >
      <h2 className='blog'>Edit Post</h2>
      <form onSubmit={handleSubmit} className="form-container" >
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Image URL:</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <label>Price:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditPost;
