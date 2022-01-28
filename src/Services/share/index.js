import { Share } from 'react-native';
import { API_HOST } from '../config';

const share = async ({
  message = API_HOST,
  title = 'App Title',
  url = API_HOST,
}) => {
  try {
    const result = await Share.share({
      message,
      title, // android only property
      url, // ios only
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
};

export default share;
