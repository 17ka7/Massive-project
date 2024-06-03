import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Education from './pages/Education';
import Predict from './pages/Predict';
import Forum from './pages/Forum';
import HealthControl from './pages/HealthControl';
import Login from './components/Login';
import Register from './components/Register';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/healthcontrol" element={<HealthControl/>} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/test' element={<Test/>} />
      </Routes>
    </Router>
  );
}

export default App;
