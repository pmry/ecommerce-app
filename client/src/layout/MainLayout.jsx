import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, LogOut, ChevronDown, Filter } from 'lucide-react';
import { useState } from 'react';

const MainLayout = () => {
  const navigate = useNavigate();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  
  // Get user info from localStorage to handle Login vs Account state
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setIsAccountOpen(false);
    navigate('/login');
    // Optional: window.location.reload() ensures all components reset their state
  };

  return (
    <div className="main-wrapper">
      {/* --- BLUE NAVIGATION BAR --- */}
      <nav className="nav-blue">
        <div className="nav-container">
          
          {/* 1. LOGO */}
          <Link to="/" className="logo">MY-STORE</Link>

          {/* 2. CATEGORY LINKS */}
          <div className="nav-links">
            <Link to="/shop">Shop</Link>
            <Link to="/men">Men</Link>
            <Link to="/women">Women</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/accessories">Accessories</Link>
            <Link to="/about">About Us</Link>
          </div>

          {/* 3. SEARCH & FILTER */}
          <div className="search-container">
            <div className="filter-box">
              <Filter size={16} />
              <select className="nav-select">
                <option>All</option>
                <option>Men</option>
                <option>Women</option>
                <option>Kids</option>
              </select>
            </div>
            <input type="text" placeholder="Search for products..." className="search-input" />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>

          {/* 4. ICONS & ACCOUNT */}
          <div className="nav-actions">
            <Link to="/favorites" className="icon-link">
              <Heart size={24} />
            </Link>
            
            <Link to="/cart" className="icon-link">
              <ShoppingCart size={24} />
              <span className="cart-badge">0</span>
            </Link>

            {userInfo ? (
              /* LOGGED IN: Account Dropdown */
              <div className="account-wrapper">
                <button 
                  className="account-trigger" 
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                >
                  <User size={24} />
                  <span>{userInfo.username || "Account"}</span>
                  <ChevronDown size={14} />
                </button>

                {isAccountOpen && (
                  <div className="dropdown-menu">
                    <Link to="/profile" onClick={() => setIsAccountOpen(false)}>My Profile</Link>
                    <Link to="/orders" onClick={() => setIsAccountOpen(false)}>My Orders</Link>
                    <hr />
                    <button onClick={handleLogout} className="logout-btn">
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* GUEST: Login Link */
              <Link to="/login" className="login-btn">Login</Link>
            )}
          </div>
        </div>
      </nav>

      {/* --- PAGE CONTENT --- */}
      <main className="content-area">
        <Outlet /> 
        {/* ^ This renders GuestHome or UserHome depending on the route */}
      </main>
    </div>
  );
};

export default MainLayout;