import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import StockFilter from '../components/StockFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/product/productActions';

const Products = () => {

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setProducts([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ])
    )
    // eslint-disable-next-line
  }, []);


  const [showInStock, setShowInStock] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleStockFilterToggle = () => {
    setShowInStock(prevState => !prevState);
  };

  const filteredProducts = product.PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStock = !showInStock || product.stocked;
    return matchesSearch && matchesStock;
  });

  return (
    <div style={{
      background: '#282c34',
      minHeight: '100vh',
      paddingTop: '10px',
      color: 'white'
    }}>
      <SearchBar onSearch={handleSearch} />
      <StockFilter isChecked={showInStock} onToggle={handleStockFilterToggle} />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Products