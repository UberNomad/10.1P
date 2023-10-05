import React from 'react';

function Experience({ experience, onExperienceChange }) {
  return (
    <div>
      <p>Experience:</p>
      <input 
        type="text" 
        placeholder="Experienced in" 
        value={experience.field}
        onChange={(e) => onExperienceChange('field', e.target.value)}
      />
      <input 
        type="number" 
        placeholder="For at least (in years)" 
        value={experience.years}
        onChange={(e) => onExperienceChange('years', e.target.value)}
      />
    </div>
  );
}

export default Experience;