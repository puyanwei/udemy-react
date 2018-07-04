import React from 'react';
import styles from './Person.css';

const person = (props) => {
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>
                I am {props.name} from {props.country}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
