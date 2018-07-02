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

    switchNameHandler = () => {
        console.log('was called');
    };

    render() {
        return (
            <div className="App">
                <h1>Street Fighter</h1>
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
                />
                <button onClick={this.switchNameHandler}>Switch Name</button>
            </div>
        );
    }
}

export default App;
