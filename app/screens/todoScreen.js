import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/todo.action';
import { BaseList, TaskItem } from '../components';
import { Colors, GlobalStyles } from '../styles';

class TodoScreen extends Component {
  constructor(props) {
    super(props);
    this.fetchTodo = this.fetchTodo.bind(this);
  }

  componentDidMount() {
    this.fetchTodo();
  }

  fetchTodo() {
    const { populateTodo } = this.props;
    populateTodo();
  }

  renderTask({ item }) {
    const { id, title, completed, userId } = item;
    return (
      <TaskItem id={id} title={title} completed={completed} userId={userId} />
    );
  }

  render() {
    const { todoLoading, todo } = this.props;
    return (
      <View style={GlobalStyles.container}>
        <BaseList
          data={todo}
          itemComponent={this.renderTask}
          columns={2}
          refreshHandler={this.fetchTodo}
          loading={todoLoading}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todoReducers.todo,
  todoLoading: state.todoReducers.loading,
  todoError: state.todoReducers.error
});

const mapDispatchToProps = (dispatch) => ({
  populateTodo: () => dispatch(Actions.fetchTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoScreen);
