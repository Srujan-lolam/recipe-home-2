import React, { useState } from 'react';
import '../styles/header.css';
import logo from '../assets/logo.webp'
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="header">
      {/* <div className="header__dropdown">
        <select>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </select>
      </div> */}
      <div className="header__logo">
        <img src={logo} alt="Recipe Platform Logo" />
        <h1>RecipePlatform</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for recipes..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="header__auth">
        <button onClick={handleAuthClick}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>
    </header>
  );
};

export default Header;