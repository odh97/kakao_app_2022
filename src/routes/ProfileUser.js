import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

import '../styles/ProfileUser.scss';

function ProfileUser() {
  const location = useLocation();
  console.log(location);
  const {id, name, email, profileImg, bgImg} = location.state;

  return (
    <div className='profileuser'>
      <Header title_name = "" title_num = "" left_item_btn_link= "/" left_item_btn_icon = "fas fa-times" right_item_btn = "fas fa-user" />
      <main>
      <section className="background" style={{backgroundImage:"URL("+bgImg+")"}}><h2 className="blind">My profile background image</h2></section>
      <section className="profile">
          <h2 className="blind">My profile</h2>     
          <div className="profile_img empty" style={{backgroundImage:"URL("+profileImg+")"}}></div>
          <div className="profile_cont">
              <span className="profile_name">{name}</span>
              <input type="mail" className="profile_email" placeholder={email} />
              <ul className="profile_menu">
                  <li><a href="#"><span className="icon"><i className="fas fa-comment"></i></span>My Chatroom</a></li>
                  <li><a href="#"><span className="icon"><i className="fas fa-pencil-alt"></i></span>Edit Profile</a></li>
              </ul>
          </div>
      </section>
      </main>
    </div>
  )
}

export default ProfileUser;