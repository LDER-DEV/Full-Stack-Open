import React from 'react'



const Persons = ({persons,searchItem,deletePerson}) =>{
    return(
      <div>
        <ul>
          {persons.map(person=> person.name.includes(searchItem)?
          <li key ={person.id}>{person.name} {person.number}
          <button id={person.id} onClick={deletePerson}>delete</button>
          </li>: '')}
        </ul>
      </div>
    )
  }

  export default Persons