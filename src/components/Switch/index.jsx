import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Switch({ options, onSelection, groupName }) {
  return (
    <div className="switch">
      {options.map((option, i) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <span className="switch-button">
          <input
            id={`switch-group-${groupName}-${option.id}`}
            type="radio"
            name={groupName}
            onClick={() => onSelection?.(option.id)}
            defaultChecked={i === 0}
          />
          <label htmlFor={`switch-group-${groupName}-${option.id}`}>
            <span>{option.name}</span>
          </label>
        </span>
      ))}
    </div>
  );
}

Switch.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelection: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
};
