import { PopularMoviesResponse } from '../models/movie';
import { useHttp } from './http.hook';

const IMDBService = () => {
  const { request } = useHttp();
  const _apiBase = 'https://api.themoviedb.org/3';
  const _apiLang = 'language=en-US';
  const _apiKey3 = 'api_key=62050b72659b37dc215bf1de992857d4';
  const _imageBig = 'https://image.tmdb.org/t/p/w500';
  const _imageMiddle = 'https://image.tmdb.org/t/p/w154';
  const _imageSmall = 'https://image.tmdb.org/t/p/w92';
  const _imageOriginal = 'https://image.tmdb.org/t/p/original';

  const getPopularMovies = async () =>
    (await request(
      `${_apiBase}/movie/popular?${_apiKey3}&${_apiLang}&page=1`
    )) as PopularMoviesResponse;

  return {
    getPopularMovies,
    _imageBig,
  };
};

export default IMDBService;
