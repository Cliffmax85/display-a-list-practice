
import './App.css';
import { gatorades } from './Gatorades/gatorade-array';
import GatoradeList from './Gatorades/GatoradeList';
import { radioheadAlbums } from './RadioheadList/radiohead-data';
import RadioheadList from './RadioheadList/RadioheadList';
import { BFFs } from './BFFs/BFFs-data';
import BFFsList from './BFFs/BFFsList';
// import your arrays here

function App() {
  console.log(BFFs);
  return (
    <div className="App">
      <GatoradeList gatorades={gatorades} />
      <RadioheadList radioheadAlbums={radioheadAlbums} />
      <BFFsList BFFs={BFFs} />
    </div>
  );
}

export default App;
