import React from 'react';

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div >
            <div className='mx-8 md:mx-16 2xl:mx-20'>
                <div className='flex text-xs md:text-sm xl:text-base h-16 border-b-2 justify-between items-center flex-1 text-right py-8'>
                    <img className='w-8 md:w-10 mr-4' src={image} alt="" />
                    <h1 className='w-16 md:w-28 mr-4'>{name}</h1>
                    <p className='w-12 mr-4'>{symbol}</p>
                    <p className='w-16 sm:w-20 lg:w-28 mr-4'>₹{price}</p>
                    <p className='w-20 md:w-32 mr-4'>₹{volume.toLocaleString()}</p>
                    {priceChange <0 ?(<p className='w-8 text-red-600 mr-4'>{priceChange.toFixed(2)}%</p>):(<p className='w-8 text-green-500 mr-4'>+{priceChange.toFixed(2)}%</p>)}
                    <p className='w-32 sm:w-40'>₹{marketcap.toLocaleString()} </p>
                </div>
            </div>
        </div>
    )
}

export default Coin;
