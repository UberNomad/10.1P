import React from 'react';

function JobDescription({ jobInfo, onInfoChange }) {
  return (
    <div>
      <p>Describe your job:</p>
      <input 
        type="text" 
        placeholder="Title/Position" 
        value={jobInfo.title} 
        onChange={(e) => onInfoChange('title', e.target.value)}
      />
      <textarea 
        placeholder="Job Description" 
        value={jobInfo.description}
        onChange={(e) => onInfoChange('description', e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Skills" 
        value={jobInfo.skills}
        onChange={(e) => onInfoChange('skills', e.target.value)}
      />
    </div>
  );
}

export default JobDescription;