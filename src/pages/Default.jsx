import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import StockFilter from '../components/StockFilter';
import Logo from '../components/Logo';
import Description from '../components/Description';
import OpenLink from '../components/OpenLink';
import Contador from '../components/Contador';
import GitHubLink from '../components/GitHubLink';

const Default = () => {

    const [products] = useState([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]);

    const [showInStock, setShowInStock] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleStockFilterToggle = () => {
        setShowInStock(prevState => !prevState);
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStock = !showInStock || product.stocked;
        return matchesSearch && matchesStock;
    });

    return (
        <>
            <header className="App-header">
                <Contador />
                <Logo />
                <Description />
                <SearchBar onSearch={handleSearch} />
                <StockFilter isChecked={showInStock} onToggle={handleStockFilterToggle} />
                <ProductList products={filteredProducts} />
                <OpenLink
                    title="Learn React"
                    url="https://react.dev/"
                />
                <GitHubLink />
            </header>
        </>
    );
};

export default Default;
