import React from 'react';

interface User {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  address: {
    city: string;
    state: string;
  };
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt="User Avatar" />
      <div className="user-text">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <p>Email: {user.email}</p>
        <p>
          Address: {user.address.city}, {user.address.state}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
