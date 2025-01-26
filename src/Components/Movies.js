import axios from "axios";
import {  useState } from 'react';
import MovieCard from "../Templates/Snippets/MovieCard.jsx";

const Movies = () => {

    let[movieName, setMovieName] = useState("Lord of the Rings");
    let[movieData, setMovieData] = useState({});

    const searchMovieByTitle = () => {
        axios.get(process.env.REACT_APP_OMDBAPI_URL+"?t="+movieName+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
      .then(response => setMovieData(response.data))
      .catch(error => console.log(error))
    }
    searchMovieByTitle();
    
    return(
        <>
    <form onSubmit={ e => e.preventDefault() }>
        <input type="text" onInput={(e) => setMovieName(e.currentTarget.value)}></input>
        <button onClick={searchMovieByTitle}>Search Movie</button>
    </form>

        <MovieCard movie= {movieData} />
        </>
    )
} 

export default Movies;