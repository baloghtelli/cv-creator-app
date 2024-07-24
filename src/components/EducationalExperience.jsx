import React, { useState } from 'react';
import styles from '../styles/EducationalExperience.module.css';

function EducationalExperience({ info, onChange }) {

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <>
      <div className={styles.container}>
        <fieldset>
          <legend>Educational Experience</legend>
          <form>
            <div className={styles.formGroup}>
              <label for="institution">Institution:</label>
              <input
                type="text"
                name="institution"
                value={info.institution}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label for="fieldOfStudy">Field of Study:</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={info.fieldOfStudy}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <h4>Dates of study:</h4>
              <div className={styles.dateRange}>
                <div>
                  <label for="studyStartDate">Start Date:</label>
                  <input
                    type="date"
                    name="studyStartDate"
                    value={info.studyStartDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label for="studyEndDate">End Date:</label>
                  <input
                    type="date"
                    name="studyEndDate"
                    value={info.studyEndDate}
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

export default EducationalExperience;