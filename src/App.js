import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  // API key
  const API_KEY = "98e3fb1f";
  // State
  const [movie, setMovie] = useState(null);
  // Function to Get Movie
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch (
      `http://www.omdbapi.com/?apikey=${API_KEY}&t=${searchTerm}`
    );
    // parse JSON response into a javascript object
    const data = await response.json();
    // set the movie sate to the movie
    setMovie(data);
  };
// We pass the getMovie function as a prop called movieSearch
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;
