import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, LogOut, ChevronDown, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="nav-blue">
            <div className="nav-container">
                <Link to="/" className="logo">MY-STORE</Link>

                <div className="search-bar">
                    <div className="filter-group">
                        <Filter size={18} />
                        <select>
                            <option>All</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                        </select>
                    </div>
                    <input type="text" placeholder="Search for products..." />
                    <button className="search-btn"><Search size={20} /></button>
                </div>

                <div className="nav-icons">
                    <Link to="/favorites" className="icon-link"><Heart /></Link>
                    <Link to="/cart" className="icon-link"><ShoppingCart /></Link>

                    {user ? (
                        /* Logged In View */
                        <div className="relative">
                            <button className="account-trigger" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <User />
                                <span>Account</span>
                                <ChevronDown size={14} />
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <Link to="/profile">My Profile</Link>
                                    <button onClick={onLogout} className="logout-btn"><LogOut size={16} /> Logout</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Guest View: Show both Login and Signup */
                        <div className="nav-auth-links">
                            <Link to="/login" className="login-link">Login</Link>
                            <Link to="/signup" className="signup-btn">Sign Up</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;