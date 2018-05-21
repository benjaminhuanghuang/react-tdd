import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';      // No need this if using jest
import App from '../../src/components/App/App';
import Calculator from '../../src/components/Calculator/Calculator';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).equal(1);
    });

    it('should render the Calculator Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).equal(true);
    });
});