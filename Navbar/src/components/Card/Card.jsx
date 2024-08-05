import React from 'react';

const Card = ({ details }) => {
  return (
    <div
      className="card border-2 border-solid border-black shadow-black shadow-lg w-[250px] m-[20px]"
    >
      <div className="card-img w-[249px] bg-cover">
        <img src={details.img} alt="photo" />
      </div>
      <div>
        <p className="card-title text-center m-0 p-[10px] font-bold text-lg">{details.title}</p>
        <p className="description card-title text-center m-0 p-[10px] text-sm">{details.description}</p>
      </div>
    </div>
  );
};

export default Card;