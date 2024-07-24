import React, { useState } from 'react';
import styles from '../styles/GeneralInformation.module.css';

function GeneralInformation({info, onChange}) {
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <>
      <div className={styles.container}>
        <fieldset>
          <legend>General Information</legend>
        <form>
          <div className={styles.formGroup}>
            <label for='name'>Name: </label>
            <input
              type='text'
              name='name'
              value={info.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label for='email'>Email: </label>
            <input
              type='email'
              name='email'
              value={info.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label for='phone'>Phone: </label>
            <input
              type='tel'
              name='phone'
              value={info.phone}
              onChange={handleChange}
            />
          </div>
        </form>
        </fieldset>
        
      </div>
    </>
  );
}

export default GeneralInformation;