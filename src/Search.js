import React from 'react';

const Search = ({handleChange}) => {
    return (
        <div className='flex my-12 py-4  justify-center items-center align-middle' >
       <h2 className='text-xl md:text-2xl mx-4' >Search a Currency</h2>
            <input className='px-4 py-2 rounded mx-4 focus:outline-none bg-transparent border-2 border-gray-200' type='text' name='search' placeholder='Search' onChange={handleChange}/>
        </div>
    )
}

export default Search;
