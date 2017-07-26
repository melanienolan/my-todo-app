import React from 'react';
import Title from '../Components/Title';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { todos } from '../mocks/todos';

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
