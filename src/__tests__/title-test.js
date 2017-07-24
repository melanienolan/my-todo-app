import React from 'react';
import Title from '../Components/Title';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const todos = [
  {
    completed: false,
    id: 'e41fac97-3d2d-457a-9990-479f016ad0ce',
    title: 'hello'
  },
  {
    completed: true,
    id: '1c3db64b-fd95-4ea6-b438-fa1b90c1baeb',
    title: 'completed todo'
  }
];

it('renders without crashing', () => {
  shallow(<Title />);
});

it('renders correct number of complete and incomplete todos', () => {
  const wrapper = shallow(<Title todos={todos} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders title header message', () => {
  const wrapper = shallow(<Title />);
  const welcome = <h1>My Todos</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
