import React from 'react';
import {Link} from 'react-router-dom';


function ChatsList({id, name, email, talk1, talk2, talk3, hour, minutes, profileImg}){

  return (
    <li>
      <Link to={"/chating"} state={{id, name, email, talk1, talk2, talk3, hour, minutes, profileImg}}>
        <span className="chats_img empty" style={{backgroundImage:'url('+profileImg+')'}}></span>
          <span className="chats_cont">
              <span className="chats_name">{name}</span>
              <span className="chats_lastest">{talk3}</span>
          </span>
          <span className="chats_time"><span>{hour}</span>:<span>{minutes}</span></span>
      </Link>
    </li>
  )
}

export default ChatsList;