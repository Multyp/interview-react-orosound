import React from 'react';

interface User { // Define the awaited types
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
    </div>
  );
};

export default UserCard;
