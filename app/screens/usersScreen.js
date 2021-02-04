import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/users.action';
import { BaseList, UserItem } from '../components';
import { GlobalStyles } from '../styles';

class UsersScreen extends Component {
  constructor(props) {
    super(props);
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    const { populateUsers } = this.props;
    populateUsers();
  }

  renderUserItem({ item }) {
    return <UserItem data={item} />;
  }

  render() {
    const { usersLoading, users } = this.props;
    return (
      <View style={GlobalStyles.container}>
        <BaseList
          columns={2}
          data={users}
          itemComponent={this.renderUserItem}
          loading={usersLoading}
          refreshHandler={this.fetchUsers}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.userReducers.users,
  usersLoading: state.userReducers.loading,
  usersError: state.userReducers.error
});

const mapDispatchToProps = (dispatch) => ({
  populateUsers: () => dispatch(Actions.fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
