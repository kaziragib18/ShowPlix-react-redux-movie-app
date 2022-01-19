import React, { useEffect } from 'react';
// import movieApi from '../../common/apis/movieApi';
// import { APIKey } from '../../common/apis/MovieApiKey'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "All";
  const showText = "Good";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))

    dispatch(fetchAsyncShows(showText))

  }, [dispatch]);
  return (
    <div>
      <div className='Banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;