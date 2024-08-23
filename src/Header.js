import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Header = ({ onLoginClick, onCartClick, onCommunityClick, cartCount }) => {
    const [mapVisible, setMapVisible] = useState(false);

    const handlePharmacySearch = () => {
        setMapVisible(true);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const map = L.map('map').setView([lat, lng], 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([lat, lng]).addTo(map)
                    .bindPopup('You are here')
                    .openPopup();

                // Sample marker for nearby pharmacy
                L.marker([lat + 0.01, lng + 0.01]).addTo(map)
                    .bindPopup('Nearby Pharmacy')
                    .openPopup();
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <header className="header">
            <div className="header-content">
                <button className="logo" onClick={() => window.location.href = '/'}>Medicare Network</button>
                <nav className="nav">
                    <ul className="left-menu">
                        <li><Link to="/new-arrivals">New Arrivals</Link></li>
                        <li><Link to="/best-sellers">Best Sellers</Link></li>
                        <li><Link to="/sale-items">Sale Items</Link></li>
                    </ul>
                    <ul className="right-menu">
                        <li><a href="/community" onClick={onCommunityClick}>Community</a></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/mypage">My Page</Link></li> {/* MyPage 링크 */}
                    </ul>
                </nav>
                <div className="auth">
                    <button className="pharmacy-btn" onClick={handlePharmacySearch}>Find Pharmacy</button>
                    <button className="login-btn" onClick={onLoginClick}>Sign In</button>
                          
                    <button className="cart-btn" onClick={onCartClick}>
                        Cart {cartCount > 0 && `(${cartCount})`}
                    </button>
                </div>
            </div>
            {mapVisible && <div id="map" style={{ height: '400px', width: '100%' }}></div>}
        </header>
    );
};

export default Header;