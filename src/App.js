import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShowListScreen from './ShowListScreen';
import ShowSummaryScreen from './ShowSummaryScreen';
import BookingScreen from './BookingScreen';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowListScreen />} />
      <Route path="/show/:id" element={<ShowSummaryScreen />} />
      <Route path="/booking/:id" element={<BookingScreen />} />

    </Routes>
  );
};

export default App;
