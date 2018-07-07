import React, { PureComponent } from 'react';
import styles from './App.css';
import PersonList from '../components/PersonList/PersonList';
import HomepageTop from '../components/HomepageTop/HomepageTop';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
    state = {
        characters: [
            { id: 1, name: 'Ryu', country: 'Japan' },
            { id: 2, name: 'Chun-Li', country: 'China' },
            { id: 3, name: 'Ken', country: 'USA' },
        ],
        showPersons: false,
        toggleCounter: 0,
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
        const newState = [...this.state.characters];
        newState.splice(personIndex, 1);
        this.setState({ characters: newState });
    };

    togglePersonsHandler = () => {
        const show = this.state.showPersons;
        this.setState((prevState, props) => {
            return {
                showPersons: !show,
                toggleCounter: prevState.toggleCounter + 1,
            };
        });
    };

    render() {
        let characters = null;

        if (this.state.showPersons) {
            characters = (
                <PersonList
                    characters={this.state.characters}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }

        return (
            <Aux>
                <button
                    onClick={() => {
                        this.setState({ showPersons: true });
                    }}
                >
                    Always Show
                </button>
                <HomepageTop
                    showPersons={this.state.showPersons}
                    characters={this.state.characters}
                    clicked={this.togglePersonsHandler}
                />
                {characters}
            </Aux>
        );
    }
}

export default withClass(App, styles.App);
