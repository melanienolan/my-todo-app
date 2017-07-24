import React from 'react';
import Title from '../Components/Title';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders without crashing', () => {
  shallow(<Title />);
});

it('renders title component', () => {
  const wrapper = shallow(<Title />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders title header message', () => {
  const wrapper = shallow(<Title />);
  const welcome = <h1>My Todos</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
