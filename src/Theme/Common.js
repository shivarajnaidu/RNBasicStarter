/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { Colors } from './Variables';
import { StyleSheet,Platform } from 'react-native';

const buttonStles = StyleSheet.create({
  btnPrimary: {
    borderRadius: 10,
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
  btnWhite: {
    borderRadius: 10,
    color: Colors.primary,
    backgroundColor: Colors.white,
    height : Platform.isPad ? 70 : 50
  },
});

const backgroundStyles = StyleSheet.create({
  bgNone: {
    backgroundColor: Colors.transparent,
  },
  bgTransparent: {
    backgroundColor: Colors.transparent,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  bgRed: {
    backgroundColor: 'red',
  },
  bgReset: {
    backgroundColor: Colors.transparent,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgSecondaryBgBlue: {
    backgroundColor: Colors.secondaryBgBlue,
  },
  bgSecondaryBlue: {
    backgroundColor: Colors.secondaryBlue,
  },
});

export default StyleSheet.create({
  ...buttonStles,
  ...backgroundStyles,
  textInput: {
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    color: Colors.text,
    minHeight: 50,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  // Box Shadow
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardRadius: {
    borderRadius: 10,
  },

  positionAbsolute: {
    position: 'absolute',
  },
  positionRelative: {
    position: 'relative',
  },
  elevationReset: {
    elevation: 0,
  },
  disabled: {
    opacity: 0.38,
  },
});
