import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ShowSummaryScreen.css'; 


const ShowSummaryScreen = () => {
  const [summary, setSummary] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchSummary();
  }, [id]);

  const fetchSummary = async () => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      const summaryWithoutTags = removeHtmlTags(response.data.summary);
      setSummary(summaryWithoutTags);
    } catch (error) {
      console.error('Error fetching show summary:', error);
    }
  };

  const removeHtmlTags = (htmlString) => {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(htmlString, 'text/html');
    return parsedHtml.body.textContent;
  };

  return (
    <div className="container-2">
      <h1>Show Summary</h1>
      <div className="summary">{summary}</div>
      <Link to={`/booking/${id}`}>
  <button className="btn">Book Ticket</button>
</Link>
    </div>
    
  );
};

export default ShowSummaryScreen;
