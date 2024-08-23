import React, { useState } from 'react';

function MyPage() {
    // State management: cart items, password, personal info
    const [cartItems] = useState([
        { id: 1, name: 'Item 1', quantity: 2, price: 20 },
        { id: 2, name: 'Item 2', quantity: 1, price: 50 },
        // More items can be added
    ]);
    const [password, setPassword] = useState('');
    const [personalInfo, setPersonalInfo] = useState({
        name: 'John Doe',
        email: 'example@example.com',
        phone: '010-1234-5678',
    });

    // Handler functions
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handlePasswordUpdate = () => {
        // Password update logic (e.g., send to server)
        alert('Password has been updated.');
    };

    const handlePersonalInfoUpdate = () => {
        // Personal info update logic (e.g., send to server)
        alert('Personal information has been updated.');
    };

    return (
        <div className="my-page">
            <h2>My Page</h2>
            <p>This is a page where you can view your user information and order history.</p>

            {/* Cart Status */}
            <div className="cart-status">
                <h3>Cart Status</h3>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - Quantity: {item.quantity} - Price: {item.price} USD
                        </li>
                    ))}
                </ul>
                <p>
                    Total Price: {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} USD
                </p>
            </div>

            {/* Password Update */}
            <div className="password-update">
                <h3>Password Update</h3>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button className="button-style" onClick={handlePasswordUpdate}>Update Password</button>
            </div>

            {/* Personal Information Update */}
            <div className="personal-info-update">
                <h3>Personal Information Update</h3>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={personalInfo.name}
                    onChange={handlePersonalInfoChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfoChange}
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                />
                <button className="button-style" onClick={handlePersonalInfoUpdate}>Update Personal Information</button>
            </div>
        </div>
    );
}

export default MyPage;