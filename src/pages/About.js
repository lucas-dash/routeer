import './About.css';
import allMovies from '../data';
import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

const About = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const newMovie = allMovies.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    });
    setMovies(newMovie);
  }, [search]);

  return (
    <section>
      <h1>About sectioon</h1>
      <form className="search">
        <label htmlFor="search">Hledat</label>
        <input
          type="text"
          className="searchInput"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <div className="all-movies">
        <Movie movies={movies} />
      </div>
    </section>
  );
};
export default About;
