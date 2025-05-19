import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  DetailContainer,
  BackButton,
  MovieContent,
  MoviePoster,
  MovieInfo,
  PlayButton
} from './MovieDetail.styles';
import Loader from '../../components/Loader/Loader';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const lists = useSelector((state) => state.movies.lists);
  const movie = Object.values(lists)
    .flatMap(list => list.contents.data)
    .find(mv => mv.id === id);

  useEffect(() => {
    if (!movie && Object.keys(lists).length > 0 && id) {
      console.warn(`Movie with id ${id} not found in existing lists.`);
      navigate('/');
    }
  }, [movie, lists, navigate, id]);

  if (!movie) {
    return <Loader />
  }

  const handlePlayTrailer = () => {
    navigate('/video');
  };

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate('/')}>← Back</BackButton>
      <MovieContent>
        <MoviePoster src={movie.images.artwork} alt={movie.title} />
        <MovieInfo>
          <h1>{movie.title}</h1>
          <p>{movie.short_plot}</p>
          <p>Year: {movie.year}</p>
          <p>Duration: {movie.duration} minutes</p>
          {movie.highlighted_score && (
            <p>Rating: {movie.highlighted_score.score}/10 ({movie.highlighted_score.formatted_amount_of_votes} votes)</p>
          )}
          <PlayButton onClick={handlePlayTrailer}>
            Play Trailer
          </PlayButton>
        </MovieInfo>
      </MovieContent>
    </DetailContainer>
  );
};

export default MovieDetail; 