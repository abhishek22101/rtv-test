import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieList } from '../../store/movieSlice';
import MovieList from '../../components/MovieList/MovieList';
import { HomeContainer } from './HomePage.styles';
import Loader from '../../components/Loader/Loader';

const listIds = [
  'free-top-movies',
  'store-hottest',
  'store-all-offers',
  'free-recently-added'
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { lists, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    listIds.forEach(id => {
      if (!lists[id]) {
        dispatch(fetchMovieList(id));
      }
    });
  }, [dispatch, lists]);

  if (loading && Object.keys(lists).length === 0) {
    return <Loader />;
  }

  if (error && Object.keys(lists).length === 0) {
    return <div>Error while loading movies
        CORS: In order to fix it, you will need to modify your /etc/hosts file adding 127.0.0.1
        localhost.rakuten.tv
    </div>;
  }

  return (
    <HomeContainer>
      {listIds.map(id => {
        const list = lists[id];
        if (!list) return null;
        
        return (
          <MovieList
            key={list.id}
            movies={list.contents.data}
            title={list.name}
          />
        );
      })}
    </HomeContainer>
  );
};

export default HomePage; 