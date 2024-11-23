

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ posts, handleDelete}) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <div>

<h2 className='blog'>All Blog Posts</h2>
    
      <div className="card">
     
        {posts.length === 0 ? (
          <p>No posts available. Please create a post.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <img
                src={post.img}
                alt={post.title}
                style={{ width: '300px', height: 'auto', cursor: 'pointer' }}
                onClick={() => openModal(post)}
              />
              <p>
                <strong>Price:</strong> {post.price}
              </p>
              <p className='blog'>{post.description}</p>
              <div className="post-actions">
                <button onClick={() => handleDelete(post.id)}>Delete</button>
                <button onClick={() => navigate(`/edit/${post.id}`)}>Edit</button>

                  </div>
            </div>
          ))
        )}
      </div>

  
      {selectedPost && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedPost.title}</h3>
            <img src={selectedPost.img} alt={selectedPost.title} style={{ width: '100%' }} />
            <p>
              <strong>Price:</strong> {selectedPost.price}
            </p>
            <p>{selectedPost.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



