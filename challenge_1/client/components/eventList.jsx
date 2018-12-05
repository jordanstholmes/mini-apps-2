import React from 'react';
import PropTypes from 'prop-types';
import Event from './event';

const EventList = ({ events }) => (
  <div>
    {
      events.map(({ date, description }, idx) => (
        <Event key={idx} date={date} description={description} />
      ))
    }
  </div>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventList;
