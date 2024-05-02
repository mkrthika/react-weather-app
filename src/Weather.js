import React from 'react'

const Weather = ({search , setSearch , handleSearch}) => {
  return (
    <main>
      <h4>Please enter any State in United States to know its current temperature</h4>
        <form className='Weather' onSubmit={handleSearch}>
          <input type='text' id="search" placeholder='Enter State Name ... '
          value={search} onChange={(e) => setSearch(e.target.value)}
           />
          <button type='submit'>Search</button>
        </form>
    </main>
  )
}

export default Weather