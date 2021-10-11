import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import styles from './card.module.scss';

class Button extends Component {
  render() {
    return (
      <Link className={styles.o_button} to={ROUTES.LANDING}>
        APPLY NOW
      </Link>
    );
  }
}

export default Button;
