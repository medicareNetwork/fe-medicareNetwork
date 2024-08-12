import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
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
                                <p className="cart-item-price">{product.price}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;