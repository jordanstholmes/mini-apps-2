/* eslint-env jest */
import { configure, shallow } from 'enzyme';
import React from 'react';
import App from '../client/app';

test('basic test of enzyme', () => {
  const wrapper = shallow(<App name="bob" />);
  expect(wrapper.hasClass('bob')).toBe(true);
});
