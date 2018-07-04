import React, { PureComponent } from 'react';
import styles from './Person.css';

class Person extends PureComponent {
    render() {
        return (
            <div className={styles.Person}>
                <p onClick={this.props.click}>
                    I am {this.props.name} from {this.props.country}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        );
    }
}

export default Person;
