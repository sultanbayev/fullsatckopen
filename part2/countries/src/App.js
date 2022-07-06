import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Country from './components/Country';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const countriesToShow = filter && countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()));
  
  const getCountries = () => {
    const length = countriesToShow.length;

    if (!length) {
      return null;
    }

    if (length === 1) {
      return (<Country country={countriesToShow[0]} />);
    } else if (length > 1 && length <= 10 ) {
      return <CountriesList countries={countriesToShow} setFilter={setFilter} />
    } else {
      return (<p>Too many matches, specify another filter</p>);
    }
  }

  return (
    <>
      <Filter value={filter} onChange={handleFilterChange} />
      { getCountries() }
    </>
  );
}

export default App;
