import React from 'react';
import { View, Image } from 'react-native';
import { GlobalStyles } from '../styles';

const LogoTitle = () => {
  return (
    <View style={GlobalStyles.logoContainer}>
      <Image style={GlobalStyles.logo} source={require('../assets/logo.png')} />
    </View>
  );
};

export default LogoTitle;
