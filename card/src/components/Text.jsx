import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Text = () => {
  const [text] = useTypewriter({
    words: ['Rated Product', 'Selling Product'],
    loop: 0, // Set loop to 0 if you want to stop after one cycle
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="flex justify-center items-center font-serif h-screen m-[50px]">
      <h1 className="text-xl font-bold text-black">
        Top {''}
         <span className='text-green-600'><strong className='text-justify'>{text}</strong></span>
        <span >
          <Cursor  />
        </span>
      </h1>
    </div>
  );
};

export default Text;
