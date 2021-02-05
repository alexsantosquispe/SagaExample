import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from 'react-native-navbar-color';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/posts.action';
import { BaseList, PostItem } from '../components';
import { Colors, GlobalStyles } from '../styles';
import { Messages } from '../constants/messages';
import { Screens } from '../navigation/routes';

class PostsScreen extends Component {
  constructor(props) {
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.openDetailScreen = this.openDetailScreen.bind(this);
  }

  componentDidMount() {
    this.setNavBarColor();
    this.fetchPosts();
  }

  setNavBarColor() {
    NavigationBar.setColor(Colors.lightColor);
    NavigationBar.setStatusBarColor(Colors.lightColor);
    NavigationBar.setStatusBarTheme('dark', true);
  }

  fetchPosts() {
    const { populatePosts } = this.props;
    populatePosts();
  }

  openDetailScreen(itemId, title) {
    let { navigation } = this.props;
    navigation.navigate(Screens.details, { itemId, title });
  }

  renderPostItem = ({ item }) => {
    const { id, title, body } = item;
    return (
      <PostItem
        title={title}
        body={body}
        onPressHandler={() => this.openDetailScreen(id, title)}
      />
    );
  };

  render() {
    const { postLoading, posts, postError } = this.props;
    return (
      <View style={GlobalStyles.container}>
        <BaseList
          data={posts}
          itemComponent={this.renderPostItem}
          loading={postLoading}
          refreshHandler={this.fetchPosts}
          emptyMessage={Messages.emptyListDefault}
          errorMessage={postError}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducers.posts,
  postLoading: state.postReducers.loading,
  postError: state.postReducers.error
});

const mapDispatchToProps = (dispatch) => ({
  populatePosts: () => dispatch(Actions.fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsScreen);
