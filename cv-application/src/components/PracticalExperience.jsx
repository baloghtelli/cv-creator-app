import React, { useState } from 'react';
import styles from '../styles/PracticalExperience.module.css';

function PracticalExperience({info, onChange}) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <>
      <div className={styles.container}>
        <fieldset>
        <legend>Practical Experience</legend>
        <form>
          <div className={styles.formGroup}>
            <label for="companyName">Company Name:</label>
            <input
              type='text'
              name='companyName'
              value={info.companyName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="positionTitle">Position Title:</label>
            <input
              type='text'
              name='positionTitle'
              value={info.positionTitle}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label for="responsibilities">Main Responsibilities:</label>
            <textarea
              type='text'
              name='responsibilities'
              value={info.responsibilities}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <h4>Dates of employment:</h4>
            <div className={styles.dateRange}>
              <div>
                <label for="employmentStartDate">Start Date:</label>
                <input
                  type='date'
                  name='employmentStartDate'
                  value={info.employmentStartDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label for="employmentEndDate">End Date:</label>
                <input
                  type='date'
                  name='employmentEndDate'
                  value={info.employmentEndDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
        </fieldset>
        
      </div>
    </>
  );
}

export default PracticalExperience;