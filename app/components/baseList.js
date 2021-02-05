import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TextInput
} from 'react-native';
import EmptyList from './emptyList';
import ErrorMessage from './errorMessage';
import { Colors, GlobalStyles } from '../styles';

const BaseList = (props) => {
  const {
    loading,
    data,
    itemComponent,
    columns = 1,
    refreshHandler,
    emptyMessage,
    errorMessage
  } = props;

  const keyExtractor = (item) => {
    return item.id.toString();
  };

  // TODO: complete search component
  const renderSearchBar = () => {
    return (
      <View style={{ backgroundColor: 'white', padding: 6 }}>
        <TextInput
          style={{
            backgroundColor: '#f5f6f7',
            borderWidth: 1,
            borderColor: '#ebeef0',
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 8
          }}
          placeholder="Search"
        />
      </View>
    );
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
  ) : errorMessage ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <EmptyList message={emptyMessage} />
  );
};

export default BaseList;
