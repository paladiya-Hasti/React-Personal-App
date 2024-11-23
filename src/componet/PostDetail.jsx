

import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const navigate = useNavigate();

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className='container'>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={() => handleEditClick(post.id)}>Edit</button>
    </div>
  );
};
export default PostDetails