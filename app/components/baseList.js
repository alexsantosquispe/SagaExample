import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Colors, GlobalStyles } from '../styles';

const BaseList = (props) => {
  const { loading, data, itemComponent, columns = 1, refreshHandler } = props;

  const keyExtractor = (item) => {
    return item.id.toString();
  };

  return loading ? (
    <ActivityIndicator color={Colors.primaryColor} size="large" />
  ) : data && data.length > 0 ? (
    <FlatList
      style={GlobalStyles.baseFlatList}
      numColumns={columns}
      data={data}
      maxToRenderPerBatch={6}
      refreshing={loading}
      onRefresh={refreshHandler}
      renderItem={itemComponent}
      keyExtractor={keyExtractor}
    />
  ) : (
    <Text style={GlobalStyles.textItem}>The list is empty</Text>
  );
};

export default BaseList;
