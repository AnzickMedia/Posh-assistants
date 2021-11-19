import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styles from './card.module.scss';

class Button extends Component {
  render() {
    return (
      <Link className={styles.o_button} to={this.props.route}>
        {this.props.text}
      </Link>
    );
  }
}

Button.defaultProps = {
  route: ROUTES.LANDING,
  text: "APPLY NOW",
}

export default Button;
