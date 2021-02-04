import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GlobalStyles, Colors } from '../styles';
import { getFirstLetter, getRandomColor } from '../utils';

const UserItem = ({ data }) => {
  const letter = getFirstLetter(data.name);
  const randomColor = getRandomColor();

  return data ? (
    <View style={GlobalStyles.userItem}>
      <View style={[GlobalStyles.userAvatar, { backgroundColor: randomColor }]}>
        <Text style={GlobalStyles.userLetter}>{letter}</Text>
      </View>
      <View>
        <View style={[GlobalStyles.userInfo, { alignSelf: 'center' }]}>
          <Text style={GlobalStyles.userName}>{data.name}</Text>
        </View>
        <View style={GlobalStyles.userInfo}>
          <Icon name="email" size={20} color={Colors.darkColor} />
          <Text style={GlobalStyles.userData}>{data.email}</Text>
        </View>
        <View style={GlobalStyles.userInfo}>
          <Icon name="phone" size={20} color={Colors.darkColor} />
          <Text style={GlobalStyles.userData}>{data.phone}</Text>
        </View>
        <View style={GlobalStyles.userInfo}>
          <Icon name="language" size={20} color={Colors.darkColor} />
          <Text style={[GlobalStyles.userData, GlobalStyles.hyperlink]}>
            {data.website}
          </Text>
        </View>
      </View>
    </View>
  ) : null;
};

export default UserItem;
