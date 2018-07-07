import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends PureComponent {
    render() {
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I am {this.props.name} from {this.props.country}
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
};

export default withClass(Person, styles.Person);
