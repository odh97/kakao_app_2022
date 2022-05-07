import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header({title_name, title_num, title_icon, left_item_btn_link, left_item_btn, left_item_btn_icon, right_item_btn}) {
  return (
    <>
      <header>
          <div className="status_bar">
              <div className="left_item"><i className="fas fa-plane"></i><i className="fas fa-wifi"></i></div>
              <div className="center_item"><span>17</span>:<span>33</span></div>
              <div className="right_item"><i className="far fa-moon"></i><i className="fab fa-bluetooth-b"></i><span><span>100</span>%</span><i className="fas fa-battery-full"></i></div>
          </div>
          <div className="title_bar">
              <h1>{title_name}<span>{title_num}</span> <i className={title_icon}></i></h1>
              <div className="left_item">{left_item_btn}<Link to="/"><i className={left_item_btn_icon}></i></Link></div>
              <div className="right_item"><a href="#"><i className={right_item_btn}></i></a></div>
          </div>
      </header>
    </>
  )
}

export default Header;