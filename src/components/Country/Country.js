import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h5>Capital: {props.capital}</h5>
        </div>
    );
};

export default Country;
