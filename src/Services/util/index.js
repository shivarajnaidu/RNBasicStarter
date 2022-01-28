import { Dimensions, Linking, Platform } from 'react-native';

export const openPhoneDial = (phone) => {
  let phoneNumber = '';
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phone}`;
  } else {
    phoneNumber = `telprompt:${phone}`;
  }

  Linking.openURL(phoneNumber);
};

export const openEmail = (email) => {
  Linking.openURL(`mailto:${email}`);
};

export const openURL = (url = 'https://example.co.in') => {
  Linking.openURL(url).catch((error) =>
    console.error("Couldn't load page", error),
  );
};

export const getScreenHeight = (email) => {
  return Dimensions.get('screen').height;
};

export default {
  openPhoneDial,
  openEmail,
  getScreenHeight,
  openURL,
  isMobile: Dimensions.get('screen').width < 500,
  height: Dimensions.get('screen').height,
  width: Dimensions.get('screen').width,
};
