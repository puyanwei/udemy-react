import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid black',
            padding: '8px',
            marginBottom: '10px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black',
            },
        };

        let characters = null;

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
            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black',
            };
        }

        const classes = [];
        if (this.state.characters.length <= 2) {
            classes.push('red');
        }
        if (this.state.characters.length <= 1) {
            classes.push('bold');
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Street Fighter</h1>
                    <p className={classes.join(' ')}>Pick Your Character</p>
                    <button style={style} onClick={this.togglePersonsHandler}>
                        Toggle Views
                    </button>
                    {characters}
                </div>
            </StyleRoot>
        );
    }
}

export default Radium(App);
