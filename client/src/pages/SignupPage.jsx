// client/src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        // Add your API call to /api/auth/register here later
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>
                <input 
                    type="text" 
                    placeholder="Full Name" 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setFormData({...formData, password: e.target.value})} 
                    required 
                />
                <button type="submit" className="auth-btn">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignupPage;