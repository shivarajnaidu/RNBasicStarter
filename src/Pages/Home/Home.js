import * as React from 'react';
import { View, Text } from 'react-native';
import Layout from '../../Theme/Layout';

export default function HomeScreen() {
  return (
    <View style={[Layout.fill, Layout.center]}>
      <Text onPress={() => {
        
      }}>Home Screen</Text>
    </View>
  );
}

