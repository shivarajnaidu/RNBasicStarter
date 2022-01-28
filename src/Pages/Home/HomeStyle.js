import { StyleSheet } from 'react-native';
import { Colors } from '../../Theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: Colors.transparent,
    height: 150,
    width: 250,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 20,
  },
  subTitle: {
    marginLeft: 20,
  },
  termsAndConditionTextContainer: {
    marginVertical: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  termsAndConditionText: {
    color: 'grey',
    fontSize: 18,
  },
  termsAndConditionTextPrimary: {
    color: 'red',
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
  loginFormButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
});
