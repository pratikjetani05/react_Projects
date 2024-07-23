import React from 'react'




const Card = (props) => {
  
  
  return (
    
    <>  
     
        {props.details.map((value, index) => (
            <div className='card border-2 border-solid border-black shadow-black shadow-lg w-[250px] m-[20px] inline-block' key={index}>
            <div className='card-img w-[249px] bg-cover'>
                <img src={value.img} alt="photo"  />
            </div>
            <div>
                <p className='card-title text-center m-0 p-[10px] font-bold text-lg'>{value.title}</p>
                <p className='description card-title text-center m-0 p-[10px] text-sm'>{value.description}</p>
            </div>
        </div> 
        ))};
       
    </>
  )
}

export default Card

