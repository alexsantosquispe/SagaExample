import React from 'react';
import { FlatList, Text } from 'react-native';
import { GlobalStyles } from '../styles';

const BaseList = (props) => {
  const { data, itemComponent, columns = 1 } = props;

  const keyExtractor = (item) => {
    return item.id.toString();
  };

  return data.length > 0 ? (
    <FlatList
      style={GlobalStyles.baseFlatList}
      numColumns={columns}
      data={data}
      maxToRenderPerBatch={6}
      renderItem={itemComponent}
      keyExtractor={keyExtractor}
    />
  ) : (
    <Text style={GlobalStyles.textItem}>The list is empty</Text>
  );
};

export default BaseList;
