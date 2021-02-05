import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles';
import { capitalize } from '../utils';

const PostItem = (props) => {
  const { title, body, onPressHandler } = props;
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={GlobalStyles.postItem}>
        <View style={GlobalStyles.titleLayout}>
          <Text style={GlobalStyles.titleItem}>{capitalize(title)}</Text>
        </View>
        <Text style={GlobalStyles.textItem}>{body}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;
