import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">Price: {product.price}</p>
            <p className={`product-stock ${product.stocked ? 'in-stock' : 'out-of-stock'}`}>
                {product.stocked ? 'In Stock' : 'Out of Stock'}
            </p>
        </div>
    );
};

export default ProductCard;
