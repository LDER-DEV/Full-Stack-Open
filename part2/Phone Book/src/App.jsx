import { useState, useEffect } from 'react'
import axios from 'axios'
import personsService from './services/persons'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Filter from './Components/Filter'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')

  const personHook = () =>{
    console.log('effect')
    personsService
      .getAll()
      .then(response =>{
        console.log('promise fulfilled')
        setPersons(response.data)
    })
    }

  useEffect(personHook,[])

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject ={
      name: newName,
      number: newNumber,
    }
    persons.map(person => person.name).includes(newName)
    ? alert(`${newName} is already added to phonebook`)
    : 
    personsService
      .create(personObject)
      .then(response=>{
        setPersons(persons.concat(response.data))
        console.log(response.data)
        setNewName('')
        setNewNumber('')
    })
  }

  const deletePerson = (event) =>{
    const id = event.target.id
    const name = event.target.name
    window.confirm(`would you like to delete ${name} from the phonebook?`) === true?
    personsService.deleteRecord(id)
    .then(setPersons(persons.filter(person =>person.id !== id))): console.log('cancel')

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
     <Persons persons={persons} searchItem={searchItem} deletePerson={deletePerson}/>

    </div>
  )
}

export default App
