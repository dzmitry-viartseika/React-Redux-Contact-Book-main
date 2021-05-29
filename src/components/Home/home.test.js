import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import toJson from "enzyme-to-json";
import Home from './index';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import contactReducer from '../../redux/reducers/contactReducer';

configure({adapter: new Adapter()});

const store = createStore(contactReducer, {}, applyMiddleware(ReduxThunk));

test('renders correctly Home component', () => {
    const component = shallow (<Home />);
    const wrapper = component.find('.container');
    expect(toJson(wrapper)).toMatchSnapshot();
});