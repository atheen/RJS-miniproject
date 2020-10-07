import React, {useState} from 'react';

//components
import MoviesList from './List.js'
import Input from './Input.js'

function App() {
  const [watchList,setWatchList] = useState([])
  const [watched,setWatched] = useState([])

  const moveToWatched = m => {
    let newWatchList = watchList.filter(movie => movie !== m);
    setWatchList(newWatchList);
    setWatched(watched.concat([m]));
  };

  const moveToWatchList = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    setWatchList(watchList.concat([m]));
  };

  const deleteMovie = m => {
    let newWatched = watched.filter(movie => movie !== m);
    setWatched(newWatched);
    let newWatchList = watchList.filter(movie => movie !== m);
    setWatchList(newWatchList);
  };

  return (
    <div>
      <Input watchList={watchList} setWatchList={setWatchList} />
      <MoviesList list={watchList} move={moveToWatched} moveTo="Watched" deleteMovie={deleteMovie} listType="WatchList" />
      <h1>------------------------------------</h1>
      <MoviesList list={watched} move={moveToWatchList} moveTo="Unwatch" deleteMovie={deleteMovie} listType="Watched" />
    </div>
  );
}

export default App;
