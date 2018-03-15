import React from 'react';
import {shallow} from 'enzyme';
import DashboardPage from "../../components/DashboardPage";


test('should render DashboardPage component correctly with no data', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot()
});



