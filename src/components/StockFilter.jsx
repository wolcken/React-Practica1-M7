import React from 'react';
import '../styles/StockFilter.css';

const StockFilter = ({ isChecked, onToggle }) => {
    return (
        <div className="stock-filter">
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onToggle}
                />
                Mostrar solo productos en stock
            </label>
        </div>
    );
};

export default StockFilter;
