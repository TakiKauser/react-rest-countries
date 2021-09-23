import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { common, official } = props?.country?.name;
    const { flags, capital, region } = props?.country;
    return (
        <div className="country">
            <h2>Common Name: {common}</h2>
            <h3>Official Name: {official}</h3>
            <img src={flags?.[0]} alt="national flag" />
            <h5>Capital: {capital}</h5>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;
