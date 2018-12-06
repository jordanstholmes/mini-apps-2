import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid gray;
`;

const Event = ({ date, description }) => (
  <Wrapper>
    <h1>{date < 0 ? `BC ${date.slice(1)}` : `AD ${date}`}</h1>
    <div>{description}</div>
  </Wrapper>
);

Event.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Event;
