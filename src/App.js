import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        characters: [
            { id: 1, name: 'Ryu', country: 'Japan' },
            { id: 2, name: 'Chun-Li', country: 'China' },
            { id: 3, name: 'Ken', country: 'USA' },
        ],
        showPersons: true,
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.characters.slice();
        const persons = [...this.state.persons];
        // Copies the state as to not mutate the original. Defining variables will create them as reference types, meaning the copy will still mutate the original. Both methods above creates a copy that doesn't effect the original.
        persons.splice(personIndex, 1);
        this.setState({ characters: persons });
    };

    nameChangedHandler = (event) => {
        this.setState({
            characters: [
                { name: 'Ryu', country: 'Japan' },
                { name: 'Chun-Li', country: event.target.value },
                { name: 'Ken', country: 'USA' },
            ],
        });
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState({ showPersons: !show });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            marginBottom: '10px',
            cursor: 'pointer',
        };

        let characters = null;

        if (this.state.showPersons) {
            characters = (
                <div>
                    {this.state.characters.map((character, index) => {
                        return (
                            <Person
                                click={this.deletePersonHandler.bind(
                                    this,
                                    index
                                )}
                                name={character.name}
                                country={character.country}
                                key={character.id}
                            />
                        );
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1>Street Fighter</h1>
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle Views
                </button>
                {characters}
            </div>
        );
    }
}

export default App;
