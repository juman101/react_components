
import './App.css';
import Accordian from './components/accordian/accordian';
import Random_color from './components/randomcolor/random_color';
import Star_rating from './components/star_rating/star_rating';
function App() {
  return (
    <div className="App">
     <Star_rating starno={10}/>
    </div>
  );
}

export default App;
