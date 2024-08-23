import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    const formatPrice = (price) => {
        const numPrice = Number(price);
        return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2);
    };
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const [address, setAddress] = useState('');
    const [recipient, setRecipient] = useState('');
    const [phone, setPhone] = useState('');
    const [deliveryNote, setDeliveryNote] = useState('');
    const [coupon, setCoupon] = useState('');
    const [points, setPoints] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('creditCard');

    // Calculate total price
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    // Handle input changes
    const handleAddressChange = (e) => setAddress(e.target.value);
    const handleRecipientChange = (e) => setRecipient(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleDeliveryNoteChange = (e) => setDeliveryNote(e.target.value);
    const handleCouponChange = (e) => setCoupon(e.target.value);
    const handlePointsChange = (e) => setPoints(e.target.value);
    const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

    return (
        <div className="cart">
            <h1 className="title">Your Cart</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((product, index) => (
                        <div key={index} className="cart-item">
                            <img src={`/images/${product.image}`} alt={product.name} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h2 className="cart-item-name">{product.name}</h2>
                                <p className="cart-item-price">{formatPrice(product.price)} USD</p>
                                <p className="cart-item-quantity">Quantity: {product.quantity}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            <div className="cart-summary">
                <h2>Order Summary</h2>
                <p>Total Amount: {totalAmount} USD</p>
                    {/* Here you could add checkout options */}
                <div className="summary-item">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" value={address} onChange={handleAddressChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="recipient">Recipient:</label>
                    <input type="text" id="recipient" value={recipient} onChange={handleRecipientChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="delivery-note">Delivery Note:</label>
                    <textarea id="delivery-note" value={deliveryNote} onChange={handleDeliveryNoteChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="coupon">Coupon Code:</label>
                    <input type="text" id="coupon" value={coupon} onChange={handleCouponChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="points">Reward Points:</label>
                    <input type="number" id="points" value={points} onChange={handlePointsChange} />
                </div>
                <div className="summary-item">
                    <label htmlFor="payment-method">Payment Method:</label>
                    <select id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>
                </div>
                <div className="summary-item">
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;