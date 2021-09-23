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
                countries.map(country => <Country
                    country={country}
                ></Country>)
            }
        </div>
    );
};

export default Countries;