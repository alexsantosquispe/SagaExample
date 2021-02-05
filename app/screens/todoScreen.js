import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/todo.action';
import { BaseList, TaskItem } from '../components';
import { GlobalStyles } from '../styles';
import { Messages } from '../constants/messages';

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
    const { title, completed } = item;
    return <TaskItem title={title} completed={completed} />;
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
          emptyMessage={Messages.emptyTasks}
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
