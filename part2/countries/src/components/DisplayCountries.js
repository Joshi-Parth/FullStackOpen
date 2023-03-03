import CountryDetails from './CountryDetails'

const DisplayCountries = ({countries, handleShow, showCountry}) => {
    
    if (countries.length > 10){
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    else if (countries.length === 0){
        return (
            <div>
                No matches 
            </div>
        )
    }
    else if (countries.length === 1){
        const country = countries[0]
        return (
            <div>
                <CountryDetails country={country} /> 
            </div>
        )
    }
    else if (showCountry.toggle) {
        const country = showCountry.country 
        return (
            <div>
                <CountryDetails country={country} /> 
            </div>
        )
    }
    return (
        <div>
            {countries.map(country => {
                return (
                    <div key={country.name.official}>
                        {country.name.common} <button onClick={() => handleShow(country)}>show</button>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayCountries