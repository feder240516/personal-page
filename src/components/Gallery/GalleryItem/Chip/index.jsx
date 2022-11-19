import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export default function Chip({ name }) {
  return <span className="chip-badge">{name}</span>;
}

Chip.propTypes = {
  name: PropTypes.string.isRequired,
};
