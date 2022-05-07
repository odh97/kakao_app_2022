import React from 'react';

function PlusFriends({id, name, icon}) {
  return (
    <li>
      <a href="#">
        <i className={icon}></i>{name}
      </a>
    </li>

  )
}

export default PlusFriends;