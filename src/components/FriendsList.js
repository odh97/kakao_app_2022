import React from 'react';
import {Link} from 'react-router-dom';

function FriendsList({id, name, email, profileMsg, profileImg, bgImg}) {

  return (
    <li>
      <Link to={"/profileuser"} state={{id, name, email, profileMsg, profileImg, bgImg}}>
        <span className="user_img empty" style={{backgroundImage:'URL('+profileImg+')'}}></span>
        <span className="profile_name">{name}</span>
        <span className="profile_messages">{profileMsg}</span>
      </Link>
    </li>
  )
}

export default FriendsList;