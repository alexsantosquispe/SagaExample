import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../redux/actions/postDetail.action';
import { EmptyList } from '../components';
import { Colors, GlobalStyles } from '../styles';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails() {
    const { route, getPostDetail } = this.props;
    const { itemId } = route.params;
    getPostDetail(itemId);
  }

  render() {
    const { detail, loading, error, route } = this.props;
    return (
      <View style={GlobalStyles.container}>
        {loading ? (
          <ActivityIndicator color={Colors.primaryColor} size="large" />
        ) : detail ? (
          <View>
            <Text style={{ alignSelf: 'center', textAlign: 'center' }}>
              {detail.title}
            </Text>
            <Text style={{ alignSelf: 'center', textAlign: 'center' }}>
              {detail.body}
            </Text>
          </View>
        ) : (
          <EmptyList message="Post Empty" />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  detail: state.postDetailReducer.detail,
  loading: state.postDetailReducer.loading,
  error: state.postDetailReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  getPostDetail: (id) => dispatch(Actions.fetchPostById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
