import React from 'react';
import Card from './MovieCard';
import MovieCard from './MovieCard';

const Cards = ({ moviesData, recherche }) => {
  const filteredMovies = moviesData.filter(movie => movie.title.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <div className='cards'>
      {filteredMovies.map((movie) => <MovieCard el={movie} />)}
    </div>
  );
}

export default Cards;
