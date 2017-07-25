import React from 'react';
import Input from '../Components/Input';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const inputValue = 'Here is the input value';

it('renders input component without crashing', () => {
  shallow(<Input inputValue={inputValue} />);
});

it('renders todo component with todo items', () => {
  const inputComponent = shallow(<Input inputValue={inputValue} />);
  expect(toJson(inputComponent)).toMatchSnapshot();
});
