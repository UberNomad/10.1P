import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import JobTypeSelector from '../components/JobSelector';
import JobDescription from '../components/JobDescription';
import ProjectConditions from '../components/ProjectConditions';
import Experience from '../components/Experience';

function JobPage() {
  const [jobType, setJobType] = useState('freelance');
  const [jobInfo, setJobInfo] = useState({
    title: '',
    description: '',
    skills: ''
  });
  const [conditions, setConditions] = useState({
    length: '',
    paymentMin: '',
    paymentMax: '',
    workingHours: ''
  });
  const [experience, setExperience] = useState({
    field: '',
    years: ''
  });

  return (
    <div>
      <Navbar />
      <section className="job-form">
        <JobTypeSelector jobType={jobType} onJobTypeChange={setJobType} />
        <JobDescription jobInfo={jobInfo} onInfoChange={(key, value) => setJobInfo(prev => ({...prev, [key]: value}))} />
        <ProjectConditions conditions={conditions} onConditionChange={(key, value) => setConditions(prev => ({...prev, [key]: value}))} />
        {jobType === 'employment' && <Experience experience={experience} onExperienceChange={(key, value) => setExperience(prev => ({...prev, [key]: value}))} />}
        <button>Post</button>
      </section>
    </div>
  );
}

export default JobPage;