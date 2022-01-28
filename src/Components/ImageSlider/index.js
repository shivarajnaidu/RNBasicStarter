/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { AppStyles, Colors } from '../../Theme';
import { StyleSheet } from 'react-native';
import Dot from './Dot';
import { RoundedCornerButton } from '../../Components/RoundedCornerButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { Colors } from '../../Theme';

const styles = StyleSheet.create({
  slideConatiner: {
    paddingHorizontal: 20,
    marginBottom: 5,
    position: 'relative',
  },
  slideImage: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 20,
  },
  textContainerStyle: { fontSize: 14 },
  validityTexStyle: { fontSize: 12 },
  dotsContainer: { paddingHorizontal: 20 },
});

/**
 * Slide
 *   - image,
 *   - title,
 *   - text
 */
const ImageSlider = ({ slides = [] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const nextIndex =
        activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1;
      setActiveSlideIndex(nextIndex);
    }, 4000);
  }, [activeSlideIndex, slides.length]);

  const currentSlide = slides[activeSlideIndex];

  return (
    <View style={AppStyles.felx1}>
      <View style={styles.slideConatiner}>
        <Image source={currentSlide.image} style={styles.slideImage} />
        <View
          style={[
            {
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 20,
              right: 20,
              borderRadius: 20,
              padding: 30,
              backgroundColor: '#00000060',
            },
          ]}>
          {currentSlide.title}
          {currentSlide.button && (
            <View style={[AppStyles.row, AppStyles.pv10]}>
              <RoundedCornerButton
                title={currentSlide.button.text}
                style={{ paddingVertical: 7, paddingHorizontal: 30 }}
                onPress={currentSlide.button.onPress}
              />
            </View>
          )}
        </View>
      </View>

      {/* Dots */}
      <View
        style={[
          AppStyles.row,
          AppStyles.justifySpaceBetween,
          AppStyles.ph20,
          { marginBottom: 30 },
        ]}>
        <View style={[AppStyles.row]}>
          {slides.map((slide, i) => (
            <Dot key={`${i}`} active={activeSlideIndex === i} />
          ))}
        </View>
        <View>
          <Text
            style={[{ color: Colors.primary, fontSize: 16 }, AppStyles.medium]}>
            More Offers {'  '}
            <Icon name="chevron-right" color={Colors.primary} />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ImageSlider;
