import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'

const Navbar = () => {

  return (
    
      
    <div className="navbar">
    <h1 className="navbar-title">Blog App</h1>
    <Link to='/' className='link'>Home</Link>
    <Link to='/post' className='link'> + Create New Post</Link>
    
    
    <Link to={`/edit/${Post.id}`}></Link>

  </div>
  
    
  )
}

export default Navbar