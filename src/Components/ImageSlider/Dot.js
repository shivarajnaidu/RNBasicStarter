/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';
// import { AppStyles } from '../../Theme';
import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme';

const styles = StyleSheet.create({
  dot: {
    fontSize: 12,
    color: Colors.secondary,
  },
});

const Dot = ({ active }) => {
  return (
    <View>
      <Text
        style={{
          ...styles.dot,
          color: active ? Colors.secondary : '#D6D9DB',
        }}>
        {'\u2B24'}
      </Text>
    </View>
  );
};

export default Dot;
