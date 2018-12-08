import React from 'react';
import PropTypes from 'prop-types';

const convertShot = (shot) => {
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

const convertShotsToDisplay = (shot1, shot2) => {
  if (shot1 + shot2 === 10) {
    return [convertShot(shot1), '/'];
  }
  return [convertShot(shot1), convertShot(shot2)];
};

const FrameShots = ({ first, second }) => {
  const shotsForDisplay = convertShotsToDisplay(first, second);
  return (
    <table className="frame-shots">
      <tbody>
        <tr>
          <td>{shotsForDisplay[0]}</td>
          <td>{shotsForDisplay[1]}</td>
        </tr>
      </tbody>
    </table>
  );
};

FrameShots.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default FrameShots;
