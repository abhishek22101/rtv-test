import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Loader from '../Loader/Loader';
import {
  ListContainer,
  ListTitle,
  MovieListContainer,
  MovieCard,
  MoviePoster,
  MovieTitle,
  MovieInfo
} from './MovieList.styles';

const MovieList = ({ movies, title, isLoading }) => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  if (isLoading) {
    return (
      <ListContainer>
        <Loader />
      </ListContainer>
    );
  }

  return (
    <ListContainer>
      <ListTitle>{title}</ListTitle>
      <MovieListContainer ref={containerRef}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
            <MoviePoster src={movie.images.artwork} alt={movie.title} />
            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              {movie.highlighted_score && (
                <div>Rating: {movie.highlighted_score.score}/10</div>
              )}
            </MovieInfo>
          </MovieCard>
        ))}
      </MovieListContainer>
    </ListContainer>
  );
};

export default MovieList; 