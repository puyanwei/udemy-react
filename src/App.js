import React, { Component } from 'react';
import './App.css';
import Person from './components/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Learning React through Udemy</h1>
                <Person />
            </div>
        );
    }
}

export default App;
