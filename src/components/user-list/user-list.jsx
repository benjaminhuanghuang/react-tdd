import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions/users";
import User from "../user/user";

export class UserList extends Component {
  render() {
    return (
      <div>
        <button
          className="loadButton"
          onClick={this.props.getUsers}
          disabled={this.props.users.loading}
        >
          Load Users
        </button>
        {this.props.users.users.length > 0 && (
          <ul>
            {this.props.users.users.map(user => {
              return <User user={user} key={user.id} />;
            })}
          </ul>
        )}
        {this.props.users.error && (
          <div>
            A network error occured
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
