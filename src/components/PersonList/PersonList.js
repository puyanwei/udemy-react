import React from 'react';
import Person from './Person/Person';

const personList = (props) =>
    props.characters.map((character, index) => {
        return (
            <Person
                click={() => props.clicked(index)}
                name={character.name}
                country={character.country}
                key={character.id}
                changed={(event) => props.changed(event, character.id)}
            />
        );
    });

export default personList;
