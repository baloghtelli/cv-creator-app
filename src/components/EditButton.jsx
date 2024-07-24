import React from 'react';
import styles from '../styles/EditButton.module.css';

function EditButton({onClick}){
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} type='button' onClick={onClick}>Edit</button>
    </div>
  )
}

export default EditButton;