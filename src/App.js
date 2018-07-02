import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Street Fighter</h1>
                <Person name="Ryu" country="Japan"/>
                <Person name="Chun-Li" country="China">Move: Spinning Bird Kick</Person>
                <Person name="Ken" country="USA"/>
            </div>
        );
    }
}

export default App;
