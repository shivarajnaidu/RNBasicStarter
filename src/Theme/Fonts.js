/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet,Platform } from 'react-native';
import { Colors, FontSize } from './Variables';

export default StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
  },
  textRegular: {
    fontSize: FontSize.regular,
  },
  textLarge: {
    fontSize: FontSize.large,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  textPrimary: {
    color: Colors.primary,
  },
  textPrimaryDark: {
    color: Colors.primaryDark,
  },
  textSecondary: {
    color: Colors.secondary,
  },
  textWhite: {
    color: Colors.white,
  },
  textBlack: {
    color: Colors.black,
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textBold: {
    fontWeight: 'bold',
  },
  // Headings
  h1: {
    fontSize: Platform.isPad ? 48 : 24,
  },
  h2: {
    fontSize:Platform.isPad ? 30 : 18,
  },
  lh25: {
    lineHeight: 25,
  },
  regularSize: {
    fontSize: Platform.isPad ? 34 : 17,
  },
  smallerSize: {
    fontSize: Platform.isPad ? 26 : 20,
  },
  moreSmallerSize: {
    fontSize: Platform.isPad ? 22 : 15,
  },
});
