import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PostsScreen, TodoScreen, UsersScreen, DetailScreen } from '../screens';
import { Screens, Tabs } from './routes';
import { Colors } from '../styles';
import { LogoTitle } from '../components';
import { capitalize } from '../utils';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={Tabs.initialTab}
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: Colors.inactiveColor
      }}>
      <Tab.Screen
        name={Tabs.posts}
        component={PostsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="feedback" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name={Tabs.todo}
        component={TodoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="article" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name={Tabs.users}
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
      <Stack.Navigator initialRouteName={Screens.initialRoute}>
        <Stack.Screen
          name={Screens.home}
          component={MainTabScreen}
          options={{
            headerStyle: {
              elevation: 0
            },
            headerTitle: () => <LogoTitle />
          }}
        />
        <Stack.Screen
          name={Screens.details}
          component={DetailScreen}
          options={({ route }) => ({
            title: capitalize(route.params.title)
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
