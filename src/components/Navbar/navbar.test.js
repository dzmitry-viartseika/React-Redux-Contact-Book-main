import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, render } from 'enzyme';
import toJson from "enzyme-to-json";
import Navbar from './index';

configure({adapter: new Adapter()});

test('renders correctly Navbar component', () => {
    const component = shallow (<Navbar />);
    const wrapper = component.find('.navbar');
    expect(toJson(wrapper)).toMatchSnapshot();
});


test('check rendered Navbar Text', () => {
    const component = shallow (<Navbar />);
    const wrapper = component.find('.navbar-brand');
    expect(wrapper.find('Link').text()).toContain('React Redux Contact Book');
})