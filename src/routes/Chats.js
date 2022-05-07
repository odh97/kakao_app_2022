import axios from 'axios';
import React,{useState, useEffect} from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import ChatsList from '../components/ChatsList';
import Profiles from '../data/Profiles.json';

import '../styles/Chats.scss';

function Chats() {
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
    <div className='chats'>
      <Header title_name = "Chats" title_num = "" title_icon = "fas fa-caret-down" left_item_btn = "Edit" right_item_btn = "" />
      <main>
        <form className="search_box">
            <fieldset className="search_inner">
                <legend className="blind">검색창</legend>
                <i className="fas fa-search"></i>
                <input type="search" name="search" id="search" placeholder="Find firends, chats, Plus Friends" />
            </fieldset>
        </form>
        <section className="main_section">
            <header className="blind"><h2>Friends</h2></header>
            <ul>
                {userData.map((profileInfo, index) =>{
                                                        if(profileInfo.id > 1){//1보다 크면 리턴안에 값 호출
                                                          return(
                                                            <ChatsList
                                                            key = {profileInfo.id}
                                                            id = {profileInfo.id}
                                                            name = {profileInfo.name}
                                                            email = {profileInfo.email}
                                                            talk1 = {Profiles[index].talk1}
                                                            talk2 = {Profiles[index].talk2}
                                                            talk3 = {Profiles[index].talk3}
                                                            hour = {Profiles[index].hour}
                                                            minutes = {Profiles[index].minutes}
                                                            profileImg = {Profiles[index].profileImg}
                                                            />
                                                          )
                                                        }
                                                        return false; // 1과 같거나 크면 false
                                                      }
                                )
                  }
            </ul>
        </section>
        <div className="chat_fa_btn">
            <a href="#"><i className="fas fa-comment"></i></a>
        </div>
      </main>
      <Nav />
    </div>
  )
}

export default Chats;