import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../redux/actions/posts.action';
import { BaseList, PostItem } from '../components';
import { GlobalStyles } from '../styles';
import { Messages } from '../constants/messages';

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
        <BaseList
          data={posts}
          itemComponent={this.renderPostItem}
          loading={postLoading}
          refreshHandler={this.fetchPosts}
          emptyMessage={Messages.emptyListDefault}
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
