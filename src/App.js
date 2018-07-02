import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        characters: [
            { name: 'Ryu', country: 'Japan' },
            { name: 'Chun-Li', country: 'China' },
            { name: 'Ken', country: 'USA' },
        ],
        showPersons: true,
    };

    switchNameHandler = (newName) => {
        this.setState({
            characters: [
                { name: 'Ryu', country: 'Japan' },
                { name: 'Chun-Li', country: 'China' },
                { name: newName, country: 'India' },
            ],
        });
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
                    {this.state.characters.map((character) => {
                        return (
                            <Person
                                name={character.name}
                                country={character.country}
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
