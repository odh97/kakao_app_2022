import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Profiles from '../data/Profiles.json';

import '../styles/Chating.scss';

function Chating() {
  const location = useLocation();
  console.log(location);
  const {id, name, email, talk1, talk2, talk3, hour, minutes, profileImg} = location.state;

  const myProfile = Profiles[0];

  return (
    <div className='chating'>
      <Header title_name = {name} left_item_btn_link="/chats" left_item_btn_icon = "fas fa-times" right_item_btn = "fas fa-user" />
      <main>
      <span className="date_info">Monday, April 18, 2022</span>
      <div className="chat_box my">
          <span className="chat">{myProfile.talk1}</span>
          <span className="chat">{myProfile.talk2}</span>
          <span className="chat_time"><span>10</span>:<span>20</span></span>
      </div>
      <div className="chat_box other">
          <div className="other_info">
              <Link to={"/"}><span className="profile_img empty" style={{backgroundImage:"url("+profileImg+")"}}></span></Link>
              {/* <a href=""></a> */}
              <span className="profile_name">{name}</span>
          </div>
          <span className="chat">{talk1}</span>
          <span className="chat">{talk2}</span>
          <span className="chat">{talk3}</span>
          <span className="chat_time"><span>{hour}</span>:<span>{minutes}</span></span>
      </div>
      </main>
      <hr />
      <footer>
          <span className="plus_btn"><a href="#"><i className="fas fa-plus"></i></a></span>
          <form accept="/" method="post">
              <fieldset className="text_box">
                  <legend className="blind">채팅 입력창</legend>
                  <label for="chatting" className="blind">채팅입력</label>
                  <input type="text" id="chatting" className="text_field" />
                  <span className="emoticon_btn"><a href="#"><i className="far fa-smile"></i></a></span>
                  <span className="voice_btn"><a href="#"><i className="fas fa-microphone"></i></a></span>
              </fieldset>
          </form>
      </footer>
    </div>
  )
}

export default Chating;