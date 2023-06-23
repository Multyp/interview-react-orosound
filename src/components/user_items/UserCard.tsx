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
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDelete = () => {
    onDelete(user);
  };

  const binIconSrc = isHovered ? BinHover : Bin;

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="user-card">
      {isLoading ? (
        <div className="loading-indicator">Image loading...</div>
      ) : null}
      <img
        src={user.avatar}
        alt="User Avatar"
        onLoad={handleImageLoad}
      />
      <div className="user-text">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>Email: {user.email}</p>
        <p>
          Address: {user.address.city}, {user.address.state}
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
