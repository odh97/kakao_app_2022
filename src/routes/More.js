import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PlusFriends from '../components/PlusFriends';
import Profiles from '../data/Profiles.json';
import Mores from '../data/Mores.json';

import '../styles/More.scss';

function More() {
  const myProfiles = Profiles[0];
  const MoreData = Mores;
    console.log(MoreData);

  return (
    <div className='more'>
      <Header title_name = "More" left_item_btn = "" right_item_btn = "fas fa-cog" />
      <main>
          <section className="user_info">
              <h2 className="blind">사용자 정보</h2>
              <span className="profile_img empty" style={{backgroundImage:"url("+myProfiles.profileImg+")"}}></span>
              <span className="profile_info">
                  <span className="profile_name">{myProfiles.name}</span>
                  <span className="profile_email">{myProfiles.email}</span>
              </span>
              <span className="chat_img"><a href="#"><i className="far fa-comment"></i></a></span>
          </section>
          <section className="user_menu">
              <h2 className="blind">사용자 메뉴</h2>
              <ul>
                  <li><a href="#"><i className="far fa-smile"></i>Emoticons</a></li>
                  <li><a href="#"><i className="fas fa-paint-brush"></i>Themes</a></li>
                  <li><a href="#"><i className="far fa-hand-peace"></i>Plus Friends</a></li>
                  <li><a href="#"><i className="far fa-user-circle"></i>Account</a></li>
              </ul>
          </section>
          <section className="plus_friends">
              <div className='header'>
                  <h2>Plus Friends</h2>
                  <span><i className="fas fa-info-circle"></i>Learn More</span>
              </div>
              <ul className="plus_list">
                {MoreData.map(PlusFriendsInfo =>(
                                                    <PlusFriends
                                                    key={PlusFriendsInfo.id}
                                                    id={PlusFriendsInfo.id}
                                                    name={PlusFriendsInfo.name}
                                                    icon={PlusFriendsInfo.icon}
                                                    />
                                                )
                                )
                }

              </ul>
          </section>
          <section className="more_app">
              <h2 className="blind">앱 더보기</h2>
              <ul>
                  <li><a href="#"><span className="app_icon"></span>kakao Story</a></li>
                  <li><a href="#"><span className="app_icon"></span>Path</a></li>
                  <li><a href="#"><span className="app_icon"></span>kakao friends</a></li>
              </ul>
          </section>
      </main>
      <Nav />
    </div>
  )
}

export default More;