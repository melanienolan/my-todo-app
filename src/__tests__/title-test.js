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
  const titleComponent = shallow(<Title todos={todos} />);
  expect(toJson(titleComponent)).toMatchSnapshot();
});

it('renders title header message', () => {
  const titleComponent = shallow(<Title />);
  const title = <h1>My Todos</h1>;
  expect(titleComponent.contains(title)).toEqual(true);
});
