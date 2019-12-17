import React from 'react';
import { UserList } from './user-list';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('UserList Component', () => {
  let props;

  beforeEach(() => {
    props = {
      users: {
        users: [],
        loading: false,
        error: false
      }
    };
  });

  it('renders without crashing', () => {
    const tree = renderer.create(<UserList {...props} />)

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('renders an error message when a network error occurs', () => {
    props.users.error = true;
    const tree = renderer.create(<UserList {...props} />)

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('calls the getUsers function when the button is clicked', () => {
    props.getUsers = jest.fn();
    const wrapper = shallow(<UserList {...props} />);
    const spy = jest.spyOn(wrapper.instance().props, 'getUsers');

    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('renders the User component correctly', () => {
    props.users.users = [
      {
        id: 1,
        name: 'foo'
      }
    ]
    const wrapper = shallow(<UserList {...props} />);

    expect(wrapper.find('User').length).toBe(1);
  });
});