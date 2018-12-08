/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';

import Frame from '../client/components/frame';
import FrameShots from '../client/components/frameShots';

test('Renders a FrameShots component', () => {
  const wrapper = shallow(<Frame first={5} second={4} total={9} />);
  expect(wrapper.find(FrameShots).length).toBe(1);
});
