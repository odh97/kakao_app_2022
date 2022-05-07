import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <>
      <nav className="tab_bar">
        <ul>
        <li><Link className='tab_link' to='/'><i className="fas fa-user"></i>Friends</Link></li>
        <li><Link className='tab_link' to='/chats'><i className="fas fa-comment"></i>Chats</Link></li>
        <li><Link className='tab_link' to='/find'><i className="fas fa-search"></i>Find</Link></li>
        <li><Link className='tab_link' to='/more'><i className="fas fa-ellipsis-h"></i>More</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;