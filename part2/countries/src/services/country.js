import axios from 'axios'

const URL = `https://restcountries.com/v3.1/all`

export const getCountries = () => {
    return axios.get(URL)
}

// export default { getCountries }