import React from 'react';
import styles from './HomepageTop.css';

const homepageTop = (props) => {
    const assignedClasses = [];
    let btnStyles = '';
    if (props.showPersons) {
        btnStyles = styles.Red;
    }
    if (props.characters.length <= 2) {
        assignedClasses.push(styles.red);
    }
    if (props.characters.length <= 1) {
        assignedClasses.push(styles.bold);
    }

    return (
        <div className={styles.HomepageTop}>
            <h1>Street Fighter</h1>
            <p className={assignedClasses.join(' ')}>Pick Your Character</p>
            <button className={btnStyles} onClick={props.clicked}>
                Toggle Views
            </button>
        </div>
    );
};

export default homepageTop;
