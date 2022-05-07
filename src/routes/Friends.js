import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import FriendsList from '../components/FriendsList';
import Profiles from '../data/Profiles.json';

import '../styles/Friends.scss'

function Friends() {
  const[userData, setUserData] = useState([]);
  const myProfile = Profiles[0];

  useEffect(() => {
    const getUsersAPI = async () =>{
      const DataInfo = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserData(DataInfo.data); // usersInfo 안에 data
      console.log(DataInfo.data);
    }
    getUsersAPI();
  },[]);

  return (
    <div className='friends'>
        <Header title_name = "Friends" title_num = "1" left_item_btn = "Manage" right_item_btn = "fas fa-cog" />
        <main>
          <form className="search_box">
              <fieldset className="search_inner">
                  <legend className="blind">검색창</legend>
                  <i className="fas fa-search"></i>
                  <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
              </fieldset>
          </form>
          <section className="main_section">
              <div className='header'><h2>My Profile</h2></div>
              <ul>
                  <FriendsList 
                    key={myProfile.id}
                    id = {myProfile.id}
                    name = {myProfile.name}
                    email = {myProfile.email}
                    profileMsg = {myProfile.profileMsg}
                    profileImg = {myProfile.profileImg}
                    bgImg = {myProfile.backgorundImg}
                  />
              </ul>
          </section>
          <section className="main_section">
              <div className='header'><h2>Friends</h2></div>
              <ul>
                  {userData.map((profileInfo, index) =>{
                                                          if(profileInfo.id > 1){//1보다 크면 리턴안에 값 호출
                                                            return(
                                                              <FriendsList
                                                              key = {profileInfo.id}
                                                              id = {profileInfo.id}
                                                              name = {profileInfo.name}
                                                              email = {profileInfo.email}
                                                              profileMsg = {Profiles[index].profileMsg}
                                                              profileImg = {Profiles[index].profileImg}
                                                              bgImg = {Profiles[index].backgorundImg}
                                                              />
                                                            )
                                                          }
                                                          return false; // 1과 같거나 크면 false
                                                        }
                                )
                  }
              </ul>
          </section>
      </main>
      <Nav />
    </div>
  )
}

export default Friends;