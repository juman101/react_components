
import './App.css';
import Accordian from './components/accordian/accordian';
import Random_color from './components/randomcolor/random_color';
import Star_rating from './components/star_rating/star_rating';
import IS from './components/image_slider/image_slider';
import LM from './components/load_more/load_more';
import DN from './components/dynamic_nav/index';
import Change_Theme from './components/change_theme/index';
function App() {
  return (
    <div className="App">
     <Change_Theme/>
    </div>
  );
}

export default App;
