let movies = [
  {
    id: 0,
    title: 'Avengers: Infinity War',
    year: 2018,
    description:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    genre: 'Action, Adventure, Fantasy'
  },
  {
    id: 1,
    title: 'Aquaman',
    year: 2018,
    description:
      'Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
    genre: 'Action, Adventure, Fantasy'
  },
  {
    id: 2,
    title: 'Solo: A Star Wars Story',
    year: 2018,
    description:
      'During an adventure into the criminal underworld, Han Solo meets his future co-pilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.',
    genre: 'Action, Adventure, Fantasy'
  },
  {
    id: 3,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    year: 2018,
    description:
      'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
    genre: 'Adventure, Family, Fantasy'
  },
  {
    id: 4,
    title: 'Black Panther',
    year: 2018,
    description:
      "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    genre: 'Action, Adventure, Sci-Fi'
  },
  {
    id: 5,
    title: 'Fifty Shades Freed',
    year: 2018,
    description:
      'Anastasia and Christian get married, but Jack Hyde continues to threaten their relationship.',
    genre: 'Drama, Romance, Thriller'
  },
  {
    id: 6,
    title: 'Spider-Man: Into the Spider-Verse ',
    year: 2018,
    description:
      'Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.',
    genre: 'Animation, Action, Adventure'
  },
  {
    id: 7,
    title: 'Jurassic World: Fallen Kingdom',
    year: 2018,
    description:
      "When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
    genre: 'Action, Adventure, Sci-Fi'
  }
];

export const getMovies = () => movies;

export const getById = (id) => {
  const movieArr = movies.filter((movie) => movie.id === id);
  return movieArr[0];
};

export const deleteMovie = (id) => {
  const movieArr = movies.filter((movie) => movie.id !== id);
  if (movies.length > movieArr.length) {
    movies = movieArr;
    return true;
  }
  return false;
};

export const addMovie = (title, year, description, genre) => {
  const newMovie = {
    id: movies.length,
    title,
    year,
    description,
    genre
  };
  movies = [...movies, newMovie];
  return newMovie;
};
