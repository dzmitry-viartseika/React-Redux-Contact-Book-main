import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from "enzyme-to-json";
import Navbar from './index';

configure({adapter: new Adapter()});

test('renders correctly Navbar component', () => {
    const component = shallow (<Navbar />);
    const wrapper = component.find('.navbar');
    expect(toJson(wrapper)).toMatchSnapshot();
});