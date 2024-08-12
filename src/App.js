import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './Header';
import VideoSection from './VideoSection';
import './App.css';
import videoSrc from './health.mp4'; // 비디오 파일 경로
import SupplementList from './SupplementList';
import SupplementButton from './SupplementButton';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';
import SaleItems from './SaleItems';
import Cart from './Cart'; // Cart import 추가

function App() {
    const [isLoginScreen, setIsLoginScreen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartMessage, setCartMessage] = useState('');

    const handleLoginClick = () => {
        setIsLoginScreen(true);
    };

    const addToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
        setCartMessage('Item added to cart');
        setTimeout(() => setCartMessage(''), 2000); // 2초 후에 메시지 사라짐
    };

    const handleCartClick = () => {
        window.location.href = '/cart'; // 카트 버튼 클릭 시 카트 페이지로 이동
    };

    return (
        <Router>
            <div className="App">
                <Header onLoginClick={handleLoginClick} onCartClick={handleCartClick} cartCount={cartItems.length} />
                {cartMessage && <div className="cart-message">{cartMessage}</div>}
                <div className="content">
                    {isLoginScreen ? (
                        <LoginScreen />
                    ) : (
                        <>
                            <Routes>
                                <Route path="/" element={<VideoSection videoSrc={videoSrc} />} />
                                <Route path="/new-arrivals" element={<NewArrivals addToCart={addToCart} />} />
                                <Route path="/best-sellers" element={<BestSellers addToCart={addToCart} />} />
                                <Route path="/sale-items" element={<SaleItems addToCart={addToCart} />} />
                                <Route path="/cart" element={<Cart cart={cartItems} />} /> {/* Cart 컴포넌트 사용 */}
                            </Routes>
                            <SupplementButton />
                            <SupplementList addToCart={addToCart} />
                            <Footer />
                        </>
                    )}
                </div>
            </div>
        </Router>
    );
}

const LoginScreen = () => {
    return (
        <div className="login-screen">
            <div className="login-container">
                <h2>Sign In</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">ID</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default App;