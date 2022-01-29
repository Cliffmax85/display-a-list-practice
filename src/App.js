
import './App.css';
import { gatorades } from './Gatorades/gatorade-array';
import GatoradeList from './Gatorades/GatoradeList';
import { radioheadAlbums } from './RadioheadList/radiohead-data';
import RadioheadList from './RadioheadList/RadioheadList';
import { BFFs } from './BFFs/BFFs-data';
import BFFsList from './BFFs/BFFsList';
import { movies } from './Movies/Movies-data';
import MovieList from './Movies/MovieList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <GatoradeList gatorades={gatorades} />
      <RadioheadList radioheadAlbums={radioheadAlbums} />
      <BFFsList BFFs={BFFs} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
