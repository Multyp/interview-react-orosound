import { useState, useEffect, ChangeEvent } from 'react';
import UserCard from './UserCard';

import './Style/cards.css';

const API_URL = 'https://random-data-api.com/api/users/random_user?size=';

const App = () => {
  const [users, setUsers] = useState([]);
  const [numOfCards, setNumOfCards] = useState(1);

  const fetchUsers = () => {
    fetch(`${API_URL}${numOfCards}`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    fetchUsers();
  };

  const handleNumOfCardsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNumOfCards(Number(event.target.value));
  };

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
          onChange={handleNumOfCardsChange}
        />
        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <div className="profiles">{renderCards()}</div>
    </div>
  );
};

export default App;
