import React from 'react';
import { View, Text } from 'react-native';
import { GlobalStyles } from '../styles';

const PostItem = (props) => {
  const { title, body } = props;
  return (
    <View style={GlobalStyles.postItem}>
      <View style={GlobalStyles.titleLayout}>
        <Text style={GlobalStyles.titleItem}>{title}</Text>
      </View>
      <Text style={GlobalStyles.textItem}>{body}</Text>
    </View>
  );
};

export default PostItem;
