

const MovieCard = ({movie}) => {
    return (
    <>
    <img src={ movie.Poster}/>
    <h1>{movie.Title}</h1>
    <p>{movie.Plot}</p>
    </>
    )
}
export default MovieCard;