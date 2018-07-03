import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        characters: [
            { id: 1, name: 'Ryu', country: 'Japan' },
            { id: 2, name: 'Chun-Li', country: 'China' },
            { id: 3, name: 'Ken', country: 'USA' },
        ],
        showPersons: false,
    };

    nameChangedHandler = (event, id) => {
        const characterIndex = this.state.characters.findIndex((character) => {
            return character.id === id;
        });
        // Array index of chosen text box
        const chosenCharacter = { ...this.state.characters[characterIndex] };

        chosenCharacter.name = event.target.value;
        // Renames the name of the chosen character to the textbox value

        const characters = [...this.state.characters];
        characters[characterIndex] = chosenCharacter;
        // Updates the new character name to the copied state

        this.setState({ characters: characters });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.characters.slice();
        const newState = [...this.state.characters];
        // Copies the state as to not mutate the original. Defining variables will create them as reference types, meaning the copy will still mutate the original. Both methods above creates a copy that doesn't effect the original.
        newState.splice(personIndex, 1);
        this.setState({ characters: newState });
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({ showPersons: !show });
    };

    render() {
        let characters = null;
        let btnStyles = '';

        if (this.state.showPersons) {
            characters = (
                <div>
                    {this.state.characters.map((character, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                name={character.name}
                                country={character.country}
                                key={character.id}
                                changed={(event) =>
                                    this.nameChangedHandler(event, character.id)
                                }
                            />
                        );
                    })}
                </div>
            );
            btnStyles = styles.Red;
        }

        const assignedClasses = [];
        if (this.state.characters.length <= 2) {
            assignedClasses.push(styles.red);
        }
        if (this.state.characters.length <= 1) {
            assignedClasses.push(styles.bold);
        }

        return (
            <div className={styles.App}>
                <h1>Street Fighter</h1>
                <p className={assignedClasses.join(' ')}>Pick Your Character</p>
                <button
                    className={btnStyles}
                    onClick={this.togglePersonsHandler}
                >
                    Toggle Views
                </button>
                {characters}
            </div>
        );
    }
}

export default App;
