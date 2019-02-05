// import { getMovies, getById, addMovie, deleteMovie } from './old_db';
import { getMovies, getById, getSuggestions } from './db';
// getMovies().then((data) => console.log(1, data));

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getById(id),
    suggestions: (_, { id }) => getSuggestions(id)
  }
  // Mutation: {
  //   addMovie: (_, { title, year, description, genre }) =>
  //     addMovie(title, year, description, genre),
  //   deleteMovie: (_, { id }) => deleteMovie(id)
  // }
};

export default resolvers;
