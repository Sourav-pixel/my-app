import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './booking.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const BookingScreen = () => {
    const notify = () => toast.success(`Congratulations ${formData.name} 🥳`);
  const [movieName, setMovieName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    try {
   
  
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setMovieName(data.name);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <div className="box">
      <h1>Booking Screen</h1>
      <h2>Movie: {movieName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='button-2'onClick={notify}>Book Ticket</button>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default BookingScreen;
