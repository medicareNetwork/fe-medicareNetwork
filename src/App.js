import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import VideoSection from './VideoSection';
import './App.css';
import videoSrc from './health.mp4';
import SupplementList from './SupplementList';
import SupplementButton from './SupplementButton';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import BestSellers from './BestSellers';
import SaleItems from './SaleItems';
import Cart from './Cart';
import Community from './Community';
import ContactUs from './ContactUs';
import MyPage from './MyPage';

function App() {
    const [isLoginScreen, setIsLoginScreen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartMessage, setCartMessage] = useState('');

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleLoginClick = () => {
        setIsLoginScreen(true);
    };

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const itemIndex = prevItems.findIndex(item => item.id === product.id);
            if (itemIndex >= 0) {
                // If item already exists in the cart, update the quantity
                const updatedItems = [...prevItems];
                updatedItems[itemIndex].quantity += product.quantity;
                return updatedItems;
            } else {
                // Otherwise, add the new item to the cart
                return [...prevItems, product];
            }
        });
        setCartMessage('Item added to cart');
        setTimeout(() => setCartMessage(''), 2000);
    };

    const handleCartClick = () => {
        window.location.href = '/cart';
    };

    const handleCommunityClick = () => {
        window.location.href = '/community';
    };

    return (
        <Router>
            <div className="App">
                <Header
                    onLoginClick={handleLoginClick}
                    onCartClick={handleCartClick}
                    onCommunityClick={handleCommunityClick}
                    cartCount={cartItems.length}
                />
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
                                <Route path="/mypage" element={<MyPage />} />
                                <Route path="/cart" element={<Cart cart={cartItems} />} />
                                <Route path="/community" element={<Community />} />
                                <Route path="/contact-us" element={<ContactUs />} />
                            </Routes>
                            <SupplementButton />
                            <SupplementList addToCart={addToCart} />
                            <Footer />
                        </>
                    )}
                </div>
            </div>0
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