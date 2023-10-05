import React from 'react';

function JobTypeSelector({ jobType, onJobTypeChange }) {
  return (
    <div className="radio-group">
      <p>Select Job Type:</p>
      <label>
        <input 
          type="radio" 
          value="freelance" 
          checked={jobType === 'freelance'} 
          onChange={() => onJobTypeChange('freelance')} 
        />
        Freelance
      </label>
      <label>
        <input 
          type="radio" 
          value="employment" 
          checked={jobType === 'employment'} 
          onChange={() => onJobTypeChange('employment')} 
        />
        Employment
      </label>
    </div>
  );
}

export default JobTypeSelector;