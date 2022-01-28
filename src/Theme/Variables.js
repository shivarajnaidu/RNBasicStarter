/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
 import {Platform } from 'react-native';
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  // Example colors:
  white: '#ffffff',
  black: '#000000',
  text: '#212529',
  primary: '#2993FF',
  primaryDark: '#2680EB',
  secondaryText: '#1D8DFF',
  success: '#28a745',
  error: '#dc3545',
  bgPrimary: '#EFF8FF',
  bgColor: '#EFF8FF',
  secondaryBgBlue: '#eff8ff',
  secondaryBlue: '#7ABAFB',
  grey: '#787878',
};

/**
 * FontSize
 */
export const FontSize = {
  small: Platform.isPad ? 20 : 12,
  regular: Platform.isPad ? 24 : 14,
  large: Platform.isPad ? 38 : 22,
};

/**
 * Metrics Sizes
 */
const tiny = 5; // 10
const small = tiny * 2; // 10
const regular = tiny * 3; // 15
const large = regular * 2; // 30
const s20 = 20;
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  s20,
};
