import React, { useEffect, useState } from 'react';

function StartPlanning(props) {

  const [query, setQuery] = useState(props.name || '');
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Princerwtt/imdb-test/main/db.json')
      .then(response => response.json())
      .then(data => {
        setPlace(data.place);
        console.log(data.place[0].attributes.name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!place) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='explore-div'>
        <div className='explore-heading'>
          <h1>Explore the Popular destination</h1>
        </div>
        <div className='content-div'>
          <div className='main'>
            {place
              .filter(item => {
                if (query === '') {
                  return item;
                } else if (item.attributes.name.toLowerCase().includes(query.toLowerCase())) {
                  return item;
                }
                return null;
              })
              .map(item => (
                <div key={item.id} className='name-img-p-div'>
                  <h2>{item.attributes.name}</h2>
                  <img src={item.attributes.image} alt={item.attributes.name} className='image' />
                  <p>{item.attributes.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPlanning;
