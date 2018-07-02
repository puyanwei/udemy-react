import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
    state = {
        characters: [
            { name: 'Ryu', country: 'Japan' },
            { name: 'Chun-Li', country: 'China' },
            { name: 'Ken', country: 'USA' },
        ],
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

    render() {
        return (
            <div className="App">
                <h1>Street Fighter</h1>
                <button onClick={this.switchNameHandler.bind(this, 'E.Honda')}>
                    Switch Name
                </button>
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
        );
    }
}

export default App;
