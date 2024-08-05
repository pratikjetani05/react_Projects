import React from 'react';

const clothesData = [
    {
      id: 1,
      name: 'Graphic T-Shirt',
      price: '$25',
      image: 'https://via.placeholder.com/300x400',
      description: 'Comfortable cotton t-shirt with a stylish graphic print.'
    },
    {
      id: 2,
      name: 'Denim Jacket',
      price: '$75',
      image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Classic denim jacket with a modern fit.'
    },
    {
      id: 3,
      name: 'BlackPants',
      price: '$50',
      image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/8/r/m/30-singlebutton-black-combraided-original-imahfy2ghhcumcth.jpeg?q=70',
      description: 'Versatile chino pants suitable for any occasion.'
    },
  ];
  


const Clothes = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Clothes Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {clothesData.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover flex justify-center mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
            <p className="text-xl font-medium text-gray-900 mb-4">{item.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;



