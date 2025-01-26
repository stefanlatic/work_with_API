import axios from "axios";
import { useState } from 'react';


const Movies = () => {

    let[movieName, setMovieName] = useState("");

    const searchMovieByTitle = () => {
        axios.get(process.env.REACT_APP_OMDBAPI_URL+"?t="+movieName+"&apikey="+process.env.REACT_APP_OMDBAPI_KEY)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    }
    return(
        <>

        <input type="text" onInput={(e) => setMovieName(e.currentTarget.value)}></input>
        <button onClick={searchMovieByTitle}>Search Movie</button>

        </>
    )
} 

export default Movies;