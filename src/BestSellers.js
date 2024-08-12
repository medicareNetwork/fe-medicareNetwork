import React from 'react';
import './BestSellers.css'; // 별도의 CSS 파일을 사용할 예정

const products = [
    { id: 1, name: 'Vitamin C', price: '$39.99', image: 'vitaminc.jpg' },
    { id: 2, name: 'Omega 3', price: '$59.99', image: 'omega.webp' },
    { id: 3, name: 'Protein Powder', price: '$29.99', image: 'protein.webp' },
    { id: 4, name: 'Collagen', price: '$49.99', image: 'collagen.jpg' }
    // 추가 제품을 여기에 나열
];

const BestSellers = ({ addToCart }) => {
    return (
        <div className="best-sellers">
            <h1 className="title">Best Sellers</h1>
            <p className="subtitle">Explore our top-selling products</p>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={`/images/${product.image}`} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">{product.price}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-btn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSellers;