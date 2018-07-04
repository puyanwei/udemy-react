import React, { Component } from 'react';
import Person from './Person/Person';

class PersonList extends Component {
    render() {
        return this.props.characters.map((character, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={character.name}
                    country={character.country}
                    key={character.id}
                    changed={(event) => this.props.changed(event, character.id)}
                />
            );
        });
    }
}

export default PersonList;
