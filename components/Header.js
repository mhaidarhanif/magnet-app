import React from 'react';
import {
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionProps,
} from 'react-native-ui-kitten';

const Header = (
  props?: TopNavigationProps
): React.ReactElement<TopNavigationProps> => {
  return <TopNavigation title="MAGNET" />;
};

export default Header;
