import { useState } from 'react';

function Cards() {
  const [profiles, setProfiles] = useState<string[]>([]);

  const fetchRandomUser = () => {
    fetch('https://random-data-api.com/api/v2/users?size=1&is_xml=true')
      .then(response => response.json())
      .then(data => {
        const randomUser = data.first_name;
        setProfiles(prevProfiles => [...prevProfiles, randomUser]);
      })
      .catch(error => {
        console.error('Error fetching random user:', error);
      });
  };

  const eraseUsername = () => {
    setProfiles([]);
  };

  const renderProfiles = () => {
    return profiles.map((profile, index) => (
      <div key={index}>
        <h1>{profile}</h1>
      </div>
    ));
  };

  return (
    <>
      <div>
        <button onClick={fetchRandomUser}>Display</button>
        <button onClick={eraseUsername}>Erase</button>
        <div>{renderProfiles()}</div>
      </div>
    </>
  );
}

export default Cards;
