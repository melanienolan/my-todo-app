import React from 'react';
import Title from '../Components/Title';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Title />);
});

it('renders title heading message', () => {
  const wrapper = shallow(<Title />);
  const welcome = <h1>My Todos</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
