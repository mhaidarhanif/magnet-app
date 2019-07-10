import React from 'react';
import { Text, View } from 'react-native';

export default function MenuScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <View>
      <Text>Menu Area</Text>
    </View>
  );
}

MenuScreen.navigationOptions = {
  title: 'Menu',
};
