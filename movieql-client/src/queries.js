import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(limit: 40, rating: 5.5) {
      id
      title
      summary
      rating
      medium_cover_image
    }
  }
`;

export const DETAIL_PAGE = gql`
  query movieById($movieId: Int!) {
    movie(id: $movieId) {
      title
      summary
      rating
      genre
      medium_cover_image
      description_intro
      year
    }
    suggestions(id: $movieId) {
      id
      title
      rating
      medium_cover_image
    }
  }
`;
