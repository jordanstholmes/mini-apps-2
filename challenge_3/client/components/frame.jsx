import React from 'react';
import PropTypes from 'prop-types';

import FrameShots from './frameShots';

const Frame = ({ first, second, total }) => (
  <div>
    <FrameShots first={first} second={second} />
    <div className="frame-total">{total}</div>
  </div>
);

Frame.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Frame;
