
import './App.css';
import { gatorades } from './Gatorades/gatorade-array';
import GatoradeList from './Gatorades/GatoradeList';
// import your arrays here

function App() {
  return (
    <div className="App">
      <GatoradeList gatorades={gatorades} />

    </div>
  );
}

export default App;
