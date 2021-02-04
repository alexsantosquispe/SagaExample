import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PostsScreen, TodoScreen, UsersScreen, DetailScreen } from '../screens';
import { Colors } from '../styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.inactiveColor
      }}>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="feedback" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="article" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

const MainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainTabScreen}
          options={{
            title: 'PlaceholderApp'
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
