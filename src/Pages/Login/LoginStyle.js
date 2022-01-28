import { Dimensions, Platform, StyleSheet } from 'react-native';
import { Colors } from '../../Theme';

export default StyleSheet.create({
  contentWrapper: {
    height: Dimensions.get('window').height,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  logoLayoutContainer: {
    flexGrow: 2,
  },
  logo: {
    width: 200,
    resizeMode: 'contain',
  },
  formContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexGrow: 1,
  },
  textInputItem: {
    borderColor: Colors.transparent,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 10,
    color: Colors.white,
    fontSize : Platform.isPad ? 25 : 17,
    height:Platform.isPad ? 70 : 50
  },
});
