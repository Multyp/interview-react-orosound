import { useState, useEffect, ChangeEvent } from 'react';
import UserCard from './UserCard';

import './Style/cards.css';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=';

const Cards = () => {
  const [users, setUsers] = useState([]); // State to store the users
  const [numOfCards, setNumOfCards] = useState<number>(1); // State to store the number of cards

  const fetchUsers = () => {
    fetch(`${API_URL}${numOfCards}`) // Get fake users from Random Data API
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchUsers(); // Call fetchUsers on the initial render
  }, []);

  const handleRefresh = () => {
    fetchUsers(); // Refresh the users by calling fetchUsers
  };

  const handleNumOfCardsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumOfCards(Number(event.target.value)); // Update the number of cards based on the input value
  };

  // Render user cards based on the users state data
  const renderCards = () => {
    return users.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
  };

  return (
    <div>
      <div className="controls">
        <label htmlFor="num-of-cards">Number of Cards:</label>
        <input
          type="number"
          id="num-of-cards"
          min="1"
          value={numOfCards}
          onChange={handleNumOfCardsChange} // Handler for changing the number of cards
        />
        <button onClick={handleRefresh}>Refresh</button> {/* Button to refresh users */}
      </div>

      <div className="profiles">{renderCards()}</div> {/* Render user cards */}
    </div>
  );
};

export default Cards;
