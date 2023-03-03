import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/notifications/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteservices from './services/notes'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')
  const [filterList, setFilterList] = useState(persons)
  const [notification, setNotification] = useState({
    error: false,
    message: null
  })

  useEffect(() => {
    noteservices
    .getAll()
    .then(response => {
      setPersons(response.data)
      setFilterList(response.data)
    })
  }, [])

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
    const newList = event.target.value ?
     persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
     :
     persons 
    setFilterList(newList)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const isDuplicate = filterList.find(person => person.name === newName)

    
    if (isDuplicate) {
      const existingPerson = filterList.filter(p => p.name === newName)[0]
      if( window.confirm(`${newName} already exists in the phonebook, replace the old number with a new one?`)) {
        const newObj = { ...existingPerson, number: newNumber }
        noteservices
        .updateNumber(existingPerson.id,newObj)
        .then(response => {
          setFilterList(filterList.map(item => item.name === newName ? response.data : item))
        })
      }
      setNewName('')
      setNewNumber('')
    } 
    else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      noteservices
      .addPerson(newPerson)
      .then(response => {
        setFilterList(filterList.concat(response.data))
        setNotification({
          error: false,
          message: `${newPerson.name} added`
        })
        setTimeout(() => {
          setNotification({
            error: false,
            message: null
          })
        }, 5000);
      })
      setNewName('')
      setNewNumber('')
    }
    
  }
  const handleDeletePerson = (id) => {
    const idName = filterList.find(p => p.id === id)
    if(window.confirm(`Delete ${idName.name} ?`)) { 
        noteservices
        .removePerson(id)
        .then(res => {
          setFilterList(filterList.filter(p => p.id !== id))
          setNotification({
            error: false,
            message: `${idName.name} deleted`
          })
          setTimeout(() => {
            setNotification({
              error: false,
              message: null
            })
          }, 5000);
        })
        .catch(err => {
          console.log(err.message)
          setNotification({
            error: true,
            message: `${idName.name} has already been removed from the server`
          })
          setTimeout(() => {
            setNotification({
              error: false,
              message: null
            })
          }, 5000);
        }) 
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm 
        handleAdd={handleAdd} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {filterList.map(person => <Persons key={person.name} person={person} handleDeletePerson={() => handleDeletePerson(person.id)}/>)}
    </div>
  )

}

export default App
