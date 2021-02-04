import React, { Component } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/users.action';
import { BaseList, TaskItem } from '../components';
import { Colors, GlobalStyles } from '../styles';

class UsersScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    const { populateUsers } = this.props;
    populateUsers();
  }

  renderTask({ item }) {
    const { id, name, email } = item;
    return (
      <View>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </View>
    );
  }

  render() {
    const { usersLoading, users } = this.props;
    debugger;
    return (
      <View style={GlobalStyles.container}>
        {usersLoading ? (
          <ActivityIndicator color={Colors.primaryColor} />
        ) : (
          <BaseList data={users} itemComponent={this.renderTask} />
        )}
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
