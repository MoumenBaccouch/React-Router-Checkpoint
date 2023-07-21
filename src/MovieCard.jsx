import React, { useState } from 'react';
import './App.css';
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ title, description, posterURL, rating }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="movie-card">
      <img className="movie-poster" src={posterURL} alt={title} onClick={handleModalToggle} />
      <div className="movie-info">
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3 className="movie-title">{title}</h3>
            <img className="movie-poster" src={posterURL} alt={title} onClick={handleModalToggle} />
            <p className="movie-description">{description}</p>
            <p className="movie-rating">Rating: {rating}
            <ReactStars
    count={5}
    size={24}
    edit={false}
    value={rating}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
            </p>
            <button onClick={handleModalToggle}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
