import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.name} product={product} />
            ))}
        </div>
    );
};

export default ProductList;