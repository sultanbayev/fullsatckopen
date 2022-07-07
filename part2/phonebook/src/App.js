import { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState(null);
  const [status, setStatus] = useState('success');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      });
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName) {
      return;
    }

    const match = persons.filter(person => person.name === newName);
    if (match.length > 0) {
      updatePerson(match[0]);
      return;
    }
    
    const newPerson = { name: newName, number: newNumber };
    personService
      .create(newPerson)
      .then(returnedPerson => {
        const updatedPersons = [ ...persons, returnedPerson ];
        setPersons(updatedPersons);

        setStatus('success');
        setNotification(`Added ${newName}`);
        setTimeout(() => {
          setNotification(null)
        }, 5000);

        setNewName('');
        setNewNumber('');
      })
  }

  const updatePerson = (person) => {
    const confirm = window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`);
    if (!confirm) {
      return;
    }

    const updatedPerson = { name: person.name, number: newNumber };
    personService
      .update(person.id, updatedPerson)
      .then(returnedPerson => {
        const updatedPersons = persons.map(p => p.id !== returnedPerson.id ? p : returnedPerson);
        setPersons(updatedPersons);

        setStatus('success');
        setNotification(`Number of ${newName} has been updated`);
        setTimeout(() => {
          setNotification(null)
        }, 5000);

        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        setStatus('error');
        setNotification(`Information of ${person.name} has already been removed from server`);
        setTimeout(() => {
          setNotification(null)
        }, 5000);

        const filtered = persons.filter(p => p.id !== person.id);
        setPersons(filtered);
      })
  }

  const deletePersonOf = (person) => {
    const confirm = window.confirm(`Delete ${person.name} ?`);
    if (!confirm) {
      return;
    }

    personService
        .deleteOne(person.id)
        .then(() => {
          const filtered = persons.filter(p => p.id !== person.id);
          setPersons(filtered);
        })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const personsToShow = filter ? persons.filter(p => p.name.toLowerCase().includes(filter.toLowerCase())) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification status={status} message={notification} />
      <Filter filter={filter} onChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        onNameChange={handleNameChange}
        number={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} deletePersonOf={deletePersonOf} />
    </div>
  )
}

export default App