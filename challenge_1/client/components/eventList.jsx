import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Event from './event';

const Wrapper = styled.div`
  width: 70%;
`;

const EventList = ({ events }) => (
  <Wrapper>
    {
      events.map(({ date, description }, idx) => (
        <Event key={idx} date={date} description={description} />
      ))
    }
  </Wrapper>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default EventList;
