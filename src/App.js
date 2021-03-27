import logo from './logo.svg';
import './App.css';
import Column from './column';
import ViewSide from './extraScript/viewer/viewSide';
import PromtMainSide from './extraScript/prompt/promptSide';

function App() {
  return (
    <div className="row r">
      <div className="col-7">
        <PromtMainSide />
      </div>
      <div className="col-5">
        <ViewSide />
      </div>
    </div>
  );
}

export default App;
