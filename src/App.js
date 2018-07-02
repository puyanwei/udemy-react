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

        return (
            <div className="App">
                <h1>Street Fighter</h1>
                <button style={style} onClick={this.togglePersonsHandler}>
                    View Characters
                </button>
                {this.state.showPersons ? (
                    <div>
                        <Person
                            name={this.state.characters[0].name}
                            country={this.state.characters[0].country}
                        />
                        <Person
                            name={this.state.characters[1].name}
                            country={this.state.characters[1].country}
                        >
                            Move: Spinning Bird Kick
                        </Person>
                        <Person
                            name={this.state.characters[2].name}
                            country={this.state.characters[2].country}
                            click={this.switchNameHandler.bind(this, 'Guile')}
                            changed={this.nameChangedHandler}
                        />
                    </div>
                ) : null}
            </div>
        );
    }
}

export default App;
