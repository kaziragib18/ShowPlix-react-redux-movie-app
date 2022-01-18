import React, { useEffect } from 'react';
import movieApi from '../../common/apis/movieApi';
import MovieListing from '../MovieListing/MovieListing';
import { APIKey } from '../../common/apis/MovieApiKey'

const Home = () => {
  useEffect(() => {
    const movieText = "Marvel";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err:", err);
        });
      console.log("response from api", response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className='Banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;