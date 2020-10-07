import React, {useState, useEffect} from 'react';

import SearchBar from './SearchBar';

function MoviesList(props) {
  const [myMovies, setMyMovies] = useState(props.list);
  const [query, setQuery] = useState("");

  useEffect(() => {
    let movies = props.list.filter(movie =>
      movie.toLowerCase().includes(query.toLowerCase())
    );
    setMyMovies(movies);
  }, [query, props.list]);

  const movies = myMovies.map(movie => {
    return(
      <div>
        <p>{movie}</p>
        <button onClick={() => props.move(movie)}>{props.moveTo}</button>
        <button style={{color:"red"}} onClick={() => props.deleteMovie(movie)}>Delete</button>
      </div>
    );
  });

  return(
    <div>
      <p>{props.listType}: {movies.length}</p>
      <SearchBar query={query} setQuery={setQuery}/>
      {movies}
    </div>
  )
}

export default MoviesList
