import React from 'react'
import  { useState } from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

import './App.css';
function App() {
    const [moviesData, setmoviesData] = useState( [
      {
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        posterURL: 'https://th.bing.com/th/id/R.ff97f12dccd97be3ab7fbeb36cf51648?rik=o8%2bTPLPgi%2fjr2Q&pid=ImgRaw&r=0',
        rating: 4.2,
      },
      {
        title: 'The Dark Knight',
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
        posterURL: 'https://th.bing.com/th/id/R.23b537ed822ce6c58db1eb82217b3415?rik=OGC%2bDKHFrLRcDg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-1-H0FAEYwzk%2fUBZbYpvwgkI%2fAAAAAAAACi4%2fHjT5iiwUkrY%2fs1600%2fjoker-poster-for-the-dark-knight.jpg&ehk=fm29vz0Tky%2bYzbCG3brs4SmM67Rb%2bfyQSM5FRc25R54%3d&risl=&pid=ImgRaw&r=0',
        rating: 5,
      },
      {
        title: 'Interstellar',
        description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
        posterURL: 'https://th.bing.com/th/id/OIP.eWSrCr-OPPb6owngrN_V5QHaLH?pid=ImgDet&rs=1',
        rating: 4.6,
      },
      {
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        posterURL: 'https://th.bing.com/th/id/OIP.xV6_PjTfvpuFsUe9e3gwEwHaKF?pid=ImgDet&rs=1',
        rating: 5,
      },
      {
        title: 'Forrest Gump',
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
        posterURL: 'https://th.bing.com/th/id/OIP.H20sGup-FcsAMxezmc8ewQHaK5?pid=ImgDet&rs=1',
        rating: 5,
      },
      {
        title: 'The Avengers',
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
        posterURL: 'https://th.bing.com/th/id/OIP.iAsDFqwmY2RZZVAt9kiojwHaLH?pid=ImgDet&rs=1',
        rating: 5,
      },
      {
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterURL: 'https://th.bing.com/th/id/OIP.yobjBRMMdekQvZwGHeebKgHaLH?pid=ImgDet&rs=1',
        rating: 5,
      },
      {
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        posterURL: 'https://th.bing.com/th/id/OIP.3Zgn-7AZnNIGlHOdVMNG2AHaK-?pid=ImgDet&rs=1',
        rating: 4.5,
      },
      {
        title:'Lupin',
        description:'Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.',
        posterURL:'https://m.media-amazon.com/images/M/MV5BNDc4OTk0ZjUtMTA3OS00ODU0LTlmZWYtOTA5OGRmYmI0MjdmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
        rating:5
        
      },
    ]);
    const [search, setsearch] = useState("")
    return (
      <div className="App">
        <Navbar moviesData={moviesData} setmoviesData={setmoviesData} setsearch={setsearch} />
        <div className="App">
        <h1>Movie App</h1>
        <div className="movie-list">
          {moviesData.filter(el=>el.title.includes(search)).map((movie) => (
            <MovieCard
              key={movie.title}
              title={movie.title}
              description={movie.description}
              posterURL={movie.posterURL}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
  
  export default App;
  