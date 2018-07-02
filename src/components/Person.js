import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I am {props.name} from {props.country}</p>
            <p>{props.children}</p>
        </div>

    );
};

export default Person;
