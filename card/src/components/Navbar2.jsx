import React, { useState } from 'react';
import Card from './Card';
import CardData from './CardData';

const Navbar2 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(CardData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = CardData.filter((product) =>
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">E-Commerce</div>
          <div className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4">
        {filteredProducts.length > 0 ? (
          <Card details={filteredProducts} />
        ) : (
          <p className="text-center text-gray-500">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
