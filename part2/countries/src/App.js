import Filter from "./components/Filter";
import DisplayCountries from "./components/DisplayCountries";
import {useEffect, useState } from 'react'
import {getCountries} from './services/country'


const App = () => {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [showCountry, setShowCountry] = useState({
    toggle : false,
    country: ""
  })
 
  useEffect(() => {
    getCountries()
    .then(res => {
      setCountries(res.data)
      
    })
  }, [])



  const handleFilter = (event) => {
    setFilterCountries(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    setShowCountry({
      toggle: false,
      country: ""
    })
  }

  const handleShow = (country) => {
    setShowCountry({
      toggle: true,
      country: country
    })
  }

  return (
    <div className="App">
      <Filter handleFilter={handleFilter} />
      <DisplayCountries countries={filterCountries} handleShow={handleShow} showCountry={showCountry} />
    </div>
  );
}

export default App;
