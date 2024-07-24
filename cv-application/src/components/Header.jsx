import React from 'react';
import styles from '../styles/Header.module.css';

function Header(){
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My CV Application</h1>
      <p className={styles.subTitle}>Create, Edit, and Manage Your CV</p>
    </header>
  );
}

export default Header;