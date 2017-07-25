import React from 'react';
import Todos from '../Components/Todos';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const todos = [
  {
    completed: true,
    id: 'e41fac97-3d2d-457a-9990-479f016ad0ce',
    title: 'complete todo'
  },
  {
    completed: false,
    id: 'e41fac97-3d2d-457a-9990-479f016ad0ce',
    title: 'incomplete todo'
  }
];

it('renders todos component without crashing', () => {
  shallow(<Todos todos={todos} />);
});

it('renders todo component with todo items', () => {
  const todosComponent = shallow(<Todos todos={todos} />);
  expect(toJson(todosComponent)).toMatchSnapshot();
});
