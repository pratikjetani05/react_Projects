import React, { useState } from 'react';

const ShoppingCart = () => {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage(`Quantity product is increased by ${count}`);
    clearMessage();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage(`Quantity product is decreased ${count}`);
      clearMessage();
    }
  };

  const clearMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-start">
          <div className="w-2/3">
            <div className="text-lg font-semibold">From Saved Addresses</div>
            <div className="flex mt-4">
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/9/z/z/-original-imagxp8tfbntmsgk.jpeg?q=70" // Replace with the correct path
                alt="Product"
                className="w-24 h-24 rounded-lg"
              />
              <div className="ml-4 flex-1">
                <div className="text-xl font-semibold">
                  boAt Storm call 1.69 inch HD display with Bluetooth Call...
                </div>
                <div className="text-sm text-gray-500">Cherry Blossom Strap, Free Size</div>
                <div className="text-sm text-gray-500">Seller: RetailNet</div>
                <div className="flex items-center mt-2">
                  <span className="line-through text-gray-500">₹7,990</span>
                  <span className="text-green-600 text-xl ml-2">₹1,299</span>
                  <span className="text-green-600 ml-2">83% Off</span>
                </div>
                <div className="text-green-600 text-sm">2 offers applied</div>
                <div className="text-sm mt-2">Delivery by Wed Jul 31 | Free</div>
              </div>
            </div>
            <div className="bg-white mt-4 p-4 rounded-lg shadow-lg">
              <div className="text-lg font-semibold">Extended Warranty Plan by OneAssist</div>
              <div className="mt-2 flex justify-between">
                <div>
                  <div className="text-sm">Extended Warranty for Smartwatches (1 year)</div>
                  <div className="text-sm text-gray-500">₹69 <span className="line-through">₹139</span> 50% off</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Get Full Warranty Coverage and protection against damages. Add Extended
                    Warranty to make your smartwatch work longer <a href="#" className="text-blue-500">Know More</a>
                  </div>
                </div>
                <div>
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
                    Add Item
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <button
                  onClick={handleDecrement}
                  className="bg-gray-300 text-black py-1 px-2 rounded-lg"
                >
                  -
                </button>
                <span className="count mx-2">{count}</span>
                <button
                  onClick={handleIncrement}
                  className="bg-gray-300 text-black py-1 px-2 rounded-lg"
                >
                  +
                </button>
                <button className="ml-4 text-blue-500">SAVE FOR LATER</button>
                <button className="ml-4 text-red-500">REMOVE</button>
              </div>
              <div>
                <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
                  PLACE ORDER
                </button>
              </div>
            </div>
            {message && <div className="text-center text-green-600 mt-4">{message}</div>}
          </div>
          <div className="w-1/3 ml-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="text-lg font-semibold">PRICE DETAILS</div>
            <div className="mt-2 text-sm">
              <div className="flex justify-between">
                <div>Price (1 item)</div>
                <div>₹7,990</div>
              </div>
              <div className="flex justify-between">
                <div>Discount</div>
                <div className="text-green-600">– ₹6,691</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery Charges</div>
                <div className="text-green-600">Free</div>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <div>Total Amount</div>
                <div>₹1,299</div>
              </div>
              <div className="text-green-600 mt-2">You will save ₹6,691 on this order</div>
            </div>
            <div className="text-sm text-gray-500 mt-4">
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
