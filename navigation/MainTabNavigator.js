import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// -----------------------------------------------------------------------------

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import MenuScreen from '../screens/MenuScreen';
import SettingsScreen from '../screens/SettingsScreen';

// -----------------------------------------------------------------------------

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

// -----------------------------------------------------------------------------

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-home` : 'md-home'}
    />
  ),
};

HomeStack.path = '';

// -----------------------------------------------------------------------------

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  ),
};

ExploreStack.path = '';

// -----------------------------------------------------------------------------

const UpdatesStack = createStackNavigator(
  {
    Updates: UpdatesScreen,
  },
  config
);

UpdatesStack.navigationOptions = {
  tabBarLabel: 'Updates',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'}
    />
  ),
};

UpdatesStack.path = '';

// -----------------------------------------------------------------------------

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

SettingsStack.path = '';

// -----------------------------------------------------------------------------

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
  },
  config
);

MenuStack.navigationOptions = {
  tabBarLabel: 'Menu',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
    />
  ),
};

MenuStack.path = '';

// -----------------------------------------------------------------------------

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  UpdatesStack,
  SettingsStack,
  MenuStack,
});

tabNavigator.path = '';

// -----------------------------------------------------------------------------

export default tabNavigator;
