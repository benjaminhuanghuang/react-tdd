import React from 'react';
import './user.scss';

const User = ({user}) => {
  return (
    <li className="user">
      {user.name}
    </li>
  )
}

export default User;