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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Logika untuk menandai pengguna telah login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Logika untuk menandai pengguna telah logout
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/healthcontrol" element={<HealthControl/>} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/test" element={<Test/>} />

        <Route path="/article" element={<Health1/>} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
