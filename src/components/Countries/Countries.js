import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3/all")
            .then(response => response.json())
            .then(jsonData => setcountries(jsonData))
    }, []);
    return (
        <div>
            <h1>Countries</h1>
            <h2>Available Countries: {countries.length}</h2>
            {
                countries.map(country => <Country name={country.name.official} capital={country?.capital?.[0]}></Country>)
            }
        </div>
    );
};

export default Countries;