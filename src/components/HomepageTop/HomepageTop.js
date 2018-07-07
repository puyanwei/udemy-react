import React from 'react';
import styles from './HomepageTop.css';
import Aux from '../../hoc/Aux';

const homepageTop = (props) => {
    const assignedClasses = [];
    let btnStyles = styles.Button;
    if (props.showPersons) {
        btnStyles = [styles.Button, styles.Red].join(' ');
    }
    if (props.characters.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.characters.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return (
        <Aux>
            <h1>Street Fighter</h1>
            <p className={assignedClasses.join(' ')}>Pick Your Character</p>
            <button className={btnStyles} onClick={props.clicked}>
                Toggle Views
            </button>
        </Aux>
    );
};

export default homepageTop;
