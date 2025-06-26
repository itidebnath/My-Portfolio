import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
export default function header() {
  return (
    <div>
        <nav className='container'>
            <p><Link to="/" className='mylink'>Home</Link></p>
            <p><Link to="/about" className='mylink'>About</Link></p>
            <p><Link to="/project" className='mylink'>Project</Link></p>
            <p><Link to="/contact" className='mylink'>Contact</Link></p>
            
        </nav>
    </div>
  )
}
