import React from 'react';
import { View, Text } from 'react-native';
import { Colors, GlobalStyles } from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskItem = (props) => {
  const { id, title, completed, userId } = props;
  debugger;
  return (
    <View style={GlobalStyles.taskItem}>
      <View style={GlobalStyles.iconLayout}>
        {completed ? (
          <Icon name="check-circle" size={24} color={Colors.successColor} />
        ) : (
          <Icon
            name="radio-button-unchecked"
            size={24}
            color={Colors.inactiveColor}
          />
        )}
      </View>
      <Text style={GlobalStyles.subTitleItem}>{title}</Text>
    </View>
  );
};

export default TaskItem;
