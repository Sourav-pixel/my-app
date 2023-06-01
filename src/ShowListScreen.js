import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShowListScreen.css';
import { Link } from 'react-router-dom';

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
      setShows(response.data);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };

  return (
    <div className="container">
    <h1>Show List</h1>
    <div className="show-list">
      {shows.map((show) => (
        <div key={show.show.id} className="show-card">
          {show.show.image && (
            <img src={show.show.image.medium} alt={show.show.name} className="show-image" />
          )}
          <h2>{show.show.name}</h2>
          <Link to={`/show/${show.show.id}`}>
            <button className="button">View Summary</button>
          </Link>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ShowListScreen;
