import React from 'react'

const Persons = ({persons,searchItem}) =>{
    return(
      <div>
        <ul>
          {persons.map(person=> person.name.includes(searchItem)?<li key ={person.id}>{person.name} {person.number}</li>: '')}
        </ul>
      </div>
    )
  }

  export default Persons