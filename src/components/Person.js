import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>
                I am {props.name} from {props.country}
            </p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.changed}
                placeholder="Chun-Li's country"
            />
        </div>
    );
};

export default Person;
