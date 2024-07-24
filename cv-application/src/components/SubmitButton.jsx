import React from 'react';
import styles from '../styles/SubmitButton.module.css';

function SubmitButton({onClick}){
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} type='button' onClick={onClick}>Submit</button>
    </div>
    
  );
}

export default SubmitButton;