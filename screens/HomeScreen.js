import * as WebBrowser from 'expo-web-browser';
import React from 'react';

import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { Layout, Text as KText, Button } from 'react-native-ui-kitten';

import Header from '../components/Header';

const tags = [
  {
    name: 'JAPAN',
    slug: 'japan',
    primary: true,
  },
  {
    name: 'SINGAPORE',
    slug: 'singapore',
  },
  {
    name: 'USA',
    slug: '/usa',
  },
  {
    name: 'CHINA',
    slug: '/china',
  },
];

export default function HomeScreen() {
  return (
    <Layout
      style={{
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <Header />

      <KText style={{ marginVertical: 16 }} category="h3">
        MAGNET
      </KText>

      {/* <Image source={require('/assets/images/Logo.png')} /> */}

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {tags.map((tag, index) => {
          return (
            <Text key={index} style={{ marginRight: 10 }}>
              {tag.primary && <Text style={{ color: 'red' }}>•</Text>}
              <Text>#{tag.name}</Text>
            </Text>
          );
        })}
      </View>

      <View style={{ margin: 20 }}>
        <Button size="small">Follow</Button>
      </View>
    </Layout>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
  },
});
