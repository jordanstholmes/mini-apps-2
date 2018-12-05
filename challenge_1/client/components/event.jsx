import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ date, description }) => (
  <div>
    <h1>{date < 0 ? `BC ${date.slice(1)}` : `AD ${date}`}</h1>
    <div>{description}</div>
  </div>
);

Event.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
