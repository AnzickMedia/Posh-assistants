import React from 'react';
import Button from './Button';
import styles from './card.module.scss';
import imagen from '../../images/Captura.PNG'

export default function Card({ title = "JOB", salary, description, image }) {
  return (
    <div className={styles.o_card_container}>
      <img src={imagen} alt="job" />
      <div className={styles.o_card_info}>
        <h2>{title}</h2>
        <h3>$XX.xx USD</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam no-
          nummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat vo-
          lutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcor-
          per suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem</p>
        <Button />
      </div>
    </div>
  );
}
