import React from 'react';
import PropTypes from 'prop-types';

const convertToDisplay = (shot) => {
  let display;
  if (shot === 0) {
    display = '-';
  } else if (shot === 10) {
    display = 'X';
  } else if (shot === -1) {
    display = '';
  } else {
    display = shot.toString();
  }
  return display;
};

const FrameShots = ({ first, second }) => (
  <table>
    <tbody>
      <tr>
        <td>{convertToDisplay(first)}</td>
        <td>{convertToDisplay(second)}</td>
      </tr>
    </tbody>
  </table>
);

FrameShots.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default FrameShots;
