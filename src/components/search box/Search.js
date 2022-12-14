import React from 'react';
import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../Api';
import './Search.css'

function Search({ onSearchChange }) {

  const [search_item, setSearchItem] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setSearchItem(searchData);
    onSearchChange(searchData);
  }

  return (
    <div className="search-box">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search_item}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default Search;