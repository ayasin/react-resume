import React from 'react';
import './App.css';
import ResumeDetails from './resumeDetails';
import ContactInfo from './contactInfo';
import WorkInfo from './workInfo';
import EducationInfo from './educationInfo';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h1>{ResumeDetails.name}</h1>
          </div>
          <div className="col-xs-12 col-md-6">
            <ContactInfo contactList={ResumeDetails.contacts} linkList={ResumeDetails.links} />
          </div>
        </div>
        <div className="row" style={{ marginTop: '20px'}}>
          <div className="col-12">
            <h2>Work Experience</h2>
          </div>
        </div>
        <WorkInfo jobs={ResumeDetails.experience} />
        <div className="row" style={{ marginTop: '20px'}}>
          <div className="col-12">
            <h2>Education</h2>
          </div>
        </div>
        <EducationInfo schools={ResumeDetails.education} />
        <div className="row">
          <div className="col-12 text-center small" style={{margin: '25px'}}>
            <a href={ResumeDetails.hostLocation}>{ResumeDetails.hostLocation}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
