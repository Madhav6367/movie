import React from 'react'
import { useGlobalContext } from '../contest'

const Search = () => {
  const {query, setQuery, isError}= useGlobalContext();
  return (
    <div className='search-section'>
    <h2>Search Your favourite Movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
    <div>
    <input type="text" placeholder='search here' 
    value={query}
    onChange={(e)=> setQuery(e.target.value)}
    />
    </div>
    </form>
    <div className="card-error">
    <p>{isError.show && isError.msg}</p>
    </div>
    </div>
  )
}

export default Search