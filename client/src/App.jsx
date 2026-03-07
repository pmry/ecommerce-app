import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage'; 

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on startup
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('userInfo'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    window.location.href = '/'; // Redirect to guest home
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;