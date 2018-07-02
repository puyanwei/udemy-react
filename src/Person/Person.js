import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
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
