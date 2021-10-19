import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../src/page/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
