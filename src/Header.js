import React, { useState } from 'react';
import './Header.css';

const Header = ({ onLoginClick }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('Search term:', searchTerm);
    };

    return (
        <header className="header">
            <div className="logo">Think Your Health</div>
            <nav className="nav">
                <ul>
                    <li><a href="#category1">Category 1</a></li>
                    <li><a href="#category2">Category 2</a></li>
                    <li><a href="#category3">Category 3</a></li>
                </ul>
            </nav>
            <div className="auth">
                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search..."
                    />
                    <button type="submit" className="search-btn">Search</button>
                </form>
                <button className="login-btn" onClick={onLoginClick}>Login</button>
                <button className="cart-btn">Cart</button>
            </div>
        </header>
    );
};

export default Header;