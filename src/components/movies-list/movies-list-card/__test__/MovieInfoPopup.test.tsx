import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MovieInfoPopup } from '../MovieInfoPopup';

jest.mock('../../../../services/themoviedb', () => ({
  useGetMovieQuery: () => ({
    data: {
      adult: false,
      backdrop_path: '/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg',
      belongs_to_collection: {
        id: 86311,
        name: 'The Avengers Collection',
        poster_path: '/yFSIUVTCvgYrpalUktulvk3Gi5Y.jpg',
        backdrop_path: '/zuW6fOiusv4X9nnW3paHGfXcSll.jpg',
      },
      budget: 220000000,
      genres: [
        {
          id: 878,
          name: 'Science Fiction',
        },
        {
          id: 28,
          name: 'Action',
        },
        {
          id: 12,
          name: 'Adventure',
        },
      ],
      homepage: 'https://www.marvel.com/movies/the-avengers',
      id: 24428,
      imdb_id: 'tt0848228',
      original_language: 'en',
      original_title: 'The Avengers',
      overview:
        'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
      popularity: 149.968,
      poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
      production_companies: [
        {
          id: 420,
          logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
          name: 'Marvel Studios',
          origin_country: 'US',
        },
      ],
      production_countries: [
        {
          iso_3166_1: 'US',
          name: 'United States of America',
        },
      ],
      release_date: '2012-04-25',
      revenue: 1518815515,
      runtime: 143,
      spoken_languages: [
        {
          english_name: 'English',
          iso_639_1: 'en',
          name: 'English',
        },
        {
          english_name: 'Hindi',
          iso_639_1: 'hi',
          name: 'हिन्दी',
        },
      ],
      status: 'Released',
      tagline: 'Some assembly required.',
      title: 'The Avengers',
      video: false,
      vote_average: 7.708,
      vote_count: 28434,
    },
    isLoading: false,
  }),
}));

describe('MovieInfoPopup', () => {
  const setShowPopup = jest.fn();

  it('renders the movie info popup', async () => {
    render(<MovieInfoPopup showPopup={true} setShowPopup={setShowPopup} movieId={123} />);

    const wrapper = screen.getByTestId('movie-info-popup-wrapper');
    expect(wrapper).toBeInTheDocument();
    fireEvent.click(wrapper);
  });
});
