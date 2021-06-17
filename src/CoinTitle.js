import React from 'react';

const CoinTitle = () => {
    return (
        <div >
            <div className='mx-8 md:mx-16 2xl:mx-20'>
                <div className='flex text-xs md:text-sm xl:text-base h-16 border-b-2 justify-between items-center flex-1 text-right font-medium py-8'>
                    <p className='w-8 md:w-10' >Image</p>
                    <h1 className='w-16 md:w-28'>Name</h1>
                    <p className='w-12'>Symbol</p>
                    <p className='w-16 sm:w-20 lg:w-28'>Price</p>
                    <p className='w-20 md:w-32'>Volume</p>
                    <p className='w-24'>Price Change</p>
                    <p className='w-32 sm:w-40'>Market Cap</p>
                </div>
            </div>
        </div>
    )
}

export default CoinTitle;
