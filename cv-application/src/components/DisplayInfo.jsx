import React from "react";
import styles from '../styles/DisplayInfo.module.css';

function DisplayInfo({ generalInfo, educationalInfo, practicalInfo }){
  return (
    <div className={styles.container}>
      <h2>Your Generated CV</h2>

      <section>
        <h3>General Information</h3>
        <p><strong>Name:</strong> {generalInfo.name}</p>
        <p><strong>Email:</strong> {generalInfo.email}</p>
        <p><strong>Phone Number:</strong> {generalInfo.phone}</p>
      </section>

      <section>
        <h3>Educational Experience</h3>
        <p><strong>Institution:</strong> {educationalInfo.institution}</p>
        <p><strong>Field of Study:</strong> {educationalInfo.fieldOfStudy}</p>
        <p><strong>Start Date:</strong> {educationalInfo.studyStartDate}</p>
        <p><strong>End Date:</strong> {educationalInfo.studyEndDate}</p>
      </section>

      <section>
        <h3>Practical Experience</h3>
        <p><strong>Company Name:</strong> {practicalInfo.companyName}</p>
        <p><strong>Position Title:</strong> {practicalInfo.positionTitle}</p>
        <p className={styles.responsibilitiesText}><strong>Main Responsibilities:</strong> <br />{practicalInfo.responsibilities}</p>
        <p><strong>Start Date:</strong> {practicalInfo.employmentStartDate}</p>
        <p><strong>End Date:</strong> {practicalInfo.employmentEndDate}</p>
      </section>
    </div>
  );
}

export default DisplayInfo;