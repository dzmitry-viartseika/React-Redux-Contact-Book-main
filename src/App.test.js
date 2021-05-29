import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';

configure({adapter: new Adapter()});

test('test', () => {
    const component = shallow(<App />);
    const wrapper = component.find('.App');
    expect(wrapper.length).toBe(1);
});