import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors, GlobalStyles } from '../styles';

const ErrorMessage = ({ icon = 'error-outline', message }) => {
  return (
    <View style={GlobalStyles.centeredContainer}>
      <Icon name={icon} size={90} color={Colors.inactiveColor} />
      <Text style={GlobalStyles.emptyMessage}>{message}</Text>
    </View>
  );
};

export default ErrorMessage;
