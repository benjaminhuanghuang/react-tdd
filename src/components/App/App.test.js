import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render a <div /> - (enzme)', () => {
        expect(wrapper.find('div').length).equal(1);
    });

    // it('should render the Calculator Component', () => {
    //     expect(wrapper.containsMatchingElement(<Calculator />)).equal(true);
    // });
});

import { render } from '@testing-library/react';
test('renders text - (testing-library)', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/react tdd/i);
    expect(linkElement).toBeInTheDocument();
});
