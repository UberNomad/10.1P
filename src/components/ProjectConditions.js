import React from 'react';

function ProjectConditions({ conditions, onConditionChange }) {
  return (
    <div>
      <p>Project conditions:</p>
      <input 
        type="number" 
        placeholder="Project Length" 
        value={conditions.length} 
        onChange={(e) => onConditionChange('length', e.target.value)}
      />
      {/* Repeat similar patterns for Payment and Working hours */}
    </div>
  );
}

export default ProjectConditions;