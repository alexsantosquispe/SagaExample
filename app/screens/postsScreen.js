import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/posts.action';
import { BaseList, PostItem } from '../components';
import { Colors, GlobalStyles } from '../styles';

class PostsScreen extends Component {
  constructor(props) {
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { populatePosts } = this.props;
    populatePosts();
  }

  renderPostItem = ({ item }) => {
    const { title, body } = item;
    return <PostItem title={title} body={body} />;
  };

  render() {
    const { postLoading, posts } = this.props;
    return (
      <View style={GlobalStyles.container}>
        {postLoading ? (
          <ActivityIndicator color={Colors.primaryColor} />
        ) : (
          <BaseList data={posts} itemComponent={this.renderPostItem} />
        )}
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
