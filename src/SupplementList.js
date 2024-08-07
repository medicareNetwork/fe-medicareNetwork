import React from 'react';
import StarRating from './StarRating';
import './SupplementList.css';

const supplements = [
    { image: 'collagen.jpg', price: '$19.99', rating: 4, description: 'Collagen helps with skin elasticity and joint health.' },
    { image: 'vitaminc.jpg', price: '$24.99', rating: 4, description: 'Vitamin C boosts your immune system and skin health.' },
    { image: 'mg.webp', price: '$15.99', rating: 4, description: 'Magnesium supports muscle and nerve function.' },
    { image: 'iron.webp', price: '$29.99', rating: 4, description: 'Iron helps in the formation of red blood cells.' },
    { image: 'omega.webp', price: '$22.99', rating: 4, description: 'Omega-3 fatty acids are beneficial for heart health.' },
    { image: 'albumin.webp', price: '$800', rating: 4, description: 'Albumin supports liver function and protein synthesis.' },
    { image: 'royal.jpg', price: '$25.99', rating: 4, description: 'Royal jelly may support immune and brain function.' },
    { image: 'protein.webp', price: '$44.88', rating: 4, description: 'Protein powder aids muscle growth and repair.' },
];

const SupplementList = () => {
    return (
        <div className="supplement-list">
            {supplements.map((item, index) => (
                <div className="supplement-item" key={index}>
                    <img src={`/images/${item.image}`} alt={`Supplement ${index + 1}`} />
                    <div className="supplement-info">
                        <p className="supplement-price">{item.price}</p>
                        <p className="supplement-description">{item.description}</p>
                        <StarRating rating={item.rating} />
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SupplementList;