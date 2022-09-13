const Movie = ({ movie }) => {
    const getClassByRate = (vote) => {
      if (vote >= 8) {
        return 'green';
      } else if (vote >= 5) {
        return 'orange';
      } else {
        return 'red';
      }
    };
  
    return (
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <span className={getClassByRate(movie.vote_average)}>
            {movie.vote_average}
          </span>
        </div>
        <div className="overview">
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  };
  
  export default Movie;