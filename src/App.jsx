import React, { useState } from 'react';
import GeneralInformation from './components/GeneralInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import DisplayInfo from './components/DisplayInfo';
import Header from './components/Header';
import EditButton from './components/EditButton';
import SubmitButton from './components/SubmitButton';


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [educationalInfo, setEducationalInfo] = useState({
    institution: '',
    fieldOfStudy: '',
    studyStartDate: '',
    studyEndDate: ''
  });

  const [practicalInfo, setPracticalInfo] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    employmentStartDate: '',
    employmentEndDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleGeneralInfoChange = (name, value) => {
    setGeneralInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleEducationalInfoChange = (name, value) => {
    setEducationalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handlePracticalInfoChange = (name, value) => {
    setPracticalInfo(prevInfo => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };


  return (
    <div>
      <Header />
      {!submitted ? (
        <div>
          <GeneralInformation
            info={generalInfo}
            onChange={handleGeneralInfoChange}
          />
          <EducationalExperience
            info={educationalInfo}
            onChange={handleEducationalInfoChange}
          />
          <PracticalExperience
            info={practicalInfo}
            onChange={handlePracticalInfoChange}
          />
          <div>
            <SubmitButton onClick={handleSubmit} />
          </div>
        </div>
      ) : (
        <DisplayInfo
          generalInfo={generalInfo}
          educationalInfo={educationalInfo}
          practicalInfo={practicalInfo}
        />
      )}
      {submitted && <EditButton onClick={handleEdit} />}
    </div>
  );
}

export default App;
