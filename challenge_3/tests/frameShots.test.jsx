/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import FrameShots from '../client/components/frameShots';

test('FrameShots renders shots correctly', () => {
  const getFrameShotsText = (first, second) => {
    const wrapper = shallow(<FrameShots first={first} second={second} />);
    const tableDataElements = wrapper.find('td');
    const firstText = tableDataElements.at(0).text();
    const secondText = tableDataElements.at(1).text();
    return [firstText, secondText];
  };

  const justNumbers = getFrameShotsText(3, 2);
  expect(justNumbers).toEqual(['3', '2']);

  const missAndNoThrow = getFrameShotsText(0, -1);
  expect(missAndNoThrow).toEqual(['-', '']);

  const strike = getFrameShotsText(10, -1);
  expect(strike).toEqual(['X', '']);

  const spare = getFrameShotsText(5, 5);
  expect(spare).toEqual(['5', '/']);
});
