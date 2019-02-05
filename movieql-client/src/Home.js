import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home | MovieQL</title>
    </Helmet>
    <Query query={HOME_PAGE}>
      {({ loading, error, data }) => {
        if (loading) return <span>Loading</span>;
        if (error) return <span>Error</span>;
        if (data) {
          return data.movies.map(movie => {
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.medium_cover_image}
              />
            );
          });
        }
      }}
    </Query>
  </Container>
);

export default Home;
