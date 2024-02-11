import React from 'react'

const Filter = ({handleSearch})=>{
    return(
      <div>
        Filter shown with<input  
        onChange={handleSearch}/>
      </div>
    )
  }

  export default Filter
  