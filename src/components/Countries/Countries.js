import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

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
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;