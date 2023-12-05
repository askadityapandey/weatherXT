import React, { useRef } from 'react'

const Search = (props) => {
  const searchInput= useRef();
  return (
    <div className='shadow-xl mt-5 p-2'>
        <h1 className='text-3xl font-sans-apple-system'>
            Weather XT
        </h1>
     <div className='flex '>
      <input className='rounded-l-lg text-3xl ' value = {props.searchData} onChange={ () =>props.eventHandler(searchInput.current.value)} type='search' ref={searchInput} />
      <button id="search" onClick={props.searchWeather}className='rounded-r-lg text-xl text-white'>Search  </button>
     </div>


    </div>
  )
}

export default Search