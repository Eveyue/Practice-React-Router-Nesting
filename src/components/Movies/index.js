import React from "react";
import MovieDetails from "../MovieDetails/index.js";
// import movies from "../../data/movieData.js";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route exact path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
