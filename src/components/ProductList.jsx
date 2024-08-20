import React from 'react';
import '../styles/ProductList.css';

const ProductList = ({ products }) => {
    const productItems = products.map((product, index) => (
        <div key={index} className="product-card">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Stocked: {product.stocked ? "Yes" : "No"}</p>
        </div>
    ));

    return (
        <div className="product-list">
            {productItems.length > 0 ? productItems : <p>No products found</p>}
        </div>
    );
};

export default ProductList;
