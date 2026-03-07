import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Fake login for testing homepages
        const mockUser = { name: "Test User", email };
        localStorage.setItem('userInfo', JSON.stringify(mockUser));
        setUser(mockUser);
        navigate('/');
    };

    return (
        <div className="auth-page">
            <form className="auth-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit" className="auth-main-btn">Login</button>
                <p>New here? <Link to="/signup">Create an account</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;