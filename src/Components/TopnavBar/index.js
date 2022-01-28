import React from 'react';

import { View, TouchableOpacity, Image } from 'react-native';
import styles from './TopnavBarStyle';

import FeatherIcon from 'react-native-vector-icons/Feather';

import { AppStyles, Images, Colors } from '../../Theme';
import { useNavigation } from '@react-navigation/native';

const TopnavBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topnavContainerStyle}>
      <View style={styles.topnavBrandImageContainerStyle}>
        <Image source={Images.logoRed} style={styles.topnavBrandImageStyle} />
      </View>
      <View style={AppStyles.row}>
        <TouchableOpacity style={AppStyles.p10}>
          <FeatherIcon name="bell" color={Colors.text} size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={AppStyles.p10}
          onPress={() => navigation.navigate('Search')}>
          <FeatherIcon name="search" color={Colors.text} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopnavBar;
