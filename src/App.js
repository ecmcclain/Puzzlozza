import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Homepage from './components/Homepage';
import About from './components/About';
import Calendar from './components/Calendar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
           <Route path="/about" element={<About />} />
           <Route path="/calendar" element={<Calendar />} />
        </Routes>
    </div>
  );
}

export default App;
