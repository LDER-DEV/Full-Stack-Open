import { useState } from 'react'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject ={
      name: newName,
      number: newNumber,
      id: persons.length +1
    }
    persons.map(person => person.name).includes(newName)
    ? alert(`${newName} is already added to phonebook`)
    : 
    setPersons(persons.concat(personObject))
    console.log(persons)
    setNewName('')
    setNewNumber('')
  }
  const handleNameChange = (event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) =>{
    console.log(event.target.value)
    setSearchItem(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <PersonForm 
      addPerson={addPerson} 
      newName={newName} 
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
     <Persons persons={persons} searchItem={searchItem}/>
    </div>
  )
}

export default App
