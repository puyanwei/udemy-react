import React from 'react';

const Person = (props) => {
    return (
        <p>I am {props.name} from {props.country}</p>
    );
};

export default Person;
