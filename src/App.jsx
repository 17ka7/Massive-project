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
import Health1 from './pages/Health1';
import User from './pages/User';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/healthcontrol" element={<HealthControl/>} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/login" element={user && !loggedIn && <Login user={user} setLoggedIn={setLoggedIn} />} />
        <Route path='/register' element={!user && <Register setUser={setUser} />}/>
        <Route path='/test' element={<Test/>} />

        <Route path='/health1' element={<Health1/>} />
        <Route path='/user' element={user && loggedIn &&<User user={user}/>} />
      </Routes>
    </Router>
  );
}

export default App;
