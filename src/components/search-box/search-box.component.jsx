import React from 'react';
//import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) =>(
	<div className='pa2'>
    <input 
        className='pa3 ba b--green bg-lightest-blue' 
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange}
    />
    </div>
    
)
