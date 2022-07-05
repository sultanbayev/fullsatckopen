import { useState } from 'react'
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName) {
      return;
    }

    const match = persons.filter(person => person.name === newName);
    if (match.length > 0) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
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

  const personsToShow = filter ? persons.filter(p => p.name.toLowerCase().includes(filter)) : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter || ''} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName || ''} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber || ''} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { personsToShow.map(person => <Person key={person.name} person={person} />) }
    </div>
  )
}

export default App