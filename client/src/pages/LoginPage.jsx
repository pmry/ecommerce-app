import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();

  const handleFakeLogin = () => {
    const fakeUser = { name: "Guest User", email: "guest@example.com" };
    localStorage.setItem('userInfo', JSON.stringify(fakeUser));
    setUser(fakeUser);
    navigate('/'); // Go back to homepage
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Login Page</h1>
      <p>This is a placeholder for your login form.</p>
      <button 
        onClick={handleFakeLogin}
        style={{ padding: '10px 20px', backgroundColor: '#0071dc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Click to Fake Login (Test Homepages)
      </button>
    </div>
  );
};

export default LoginPage;