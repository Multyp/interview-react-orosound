import React, { useState } from 'react';
import { User } from '../interfaces/User';

import './Style/UserCard.css';

import Bin from '../../assets/bin.png';
import BinHover from '../../assets/bin-hover.png';

interface UserCardProps {
  user: User;
  onDelete: (deletedUser: User) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => { // Checks for hover on bin
    setIsHovered(true);
  };

  const handleMouseLeave = () => { // Checks for not(hover) on bin
    setIsHovered(false);
  };

  const handleDelete = () => {
    onDelete(user); // Pass the user object to the onDelete function
  };

  const binIconSrc = isHovered ? BinHover : Bin;

  return (
    <div className="user-card">
      <img src={user.avatar} alt="User Avatar" /> {/* User avatar */}
      <div className="user-text">
        <h2>
          {user.first_name} {user.last_name} {/* User's full name */}
        </h2>
        <p>
          Email: {user.email} {/* User's email address */}
        </p>
        <p>
          Address: {user.address.city}, {user.address.state} {/* User's city and state */}
        </p>
      </div>
      <img
        className="bin-icon"
        src={binIconSrc}
        alt="Bin Icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleDelete}
      />
    </div>
  );
};

export default UserCard;
