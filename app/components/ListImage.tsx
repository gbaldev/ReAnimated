import React from "react";
import { Dimensions, StyleProp, View, ViewStyle } from "react-native";
import styles from './styles';
import Animated, { SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";

interface ListImageComponent {
  uri: string,
  imageWidth: number,
  itemWidth: number,
  style?: StyleProp<ViewStyle>,
  scrollOffset: SharedValue<number>,
  index: number;
}

const {width} = Dimensions.get('window');

const ListImage: React.ComponentType<ListImageComponent> = ({ uri, style = {}, imageWidth, itemWidth, scrollOffset, index }) => {
  const inputRange = [
    itemWidth * (index - 1),
    itemWidth * index,
    itemWidth * (index + 1),
  ];

  const rViewStyle = useAnimatedStyle(() => {
    const scaleOutput = [1, 1.05, 1];
    const scale = interpolate(
      scrollOffset.value,
      inputRange,
      scaleOutput,
    );


    return ({
      transform: [{ scale }]
    })
  })
  const rStyle = useAnimatedStyle(() => {
    const xOutputRange = [-width/2, 0, width/2];
    const yOutputRange = [-20, 0, 20];
    
    const translateX = interpolate(
      scrollOffset.value,
      inputRange,
      xOutputRange,
    );

    const translateY = interpolate(
      scrollOffset.value,
      inputRange,
      yOutputRange,
    );

    return ({
      transform: [{ translateX }, { scale: 1.6 }, { translateY }]
    });
  });
  return (
    <Animated.View style={[style, {overflow: 'hidden', borderRadius: 20}, rViewStyle]}>
      <Animated.Image resizeMode={'cover'} source={{ uri }} style={[styles.image, {width: imageWidth}, rStyle]} />
    </Animated.View>
  )
}

export default ListImage;
