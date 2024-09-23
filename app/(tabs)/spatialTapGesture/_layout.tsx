import GoBack from '@/app/components/GoBack';
import React from 'react';
import { Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {Easing, cancelAnimation, useAnimatedReaction, useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import styles, { CircleRadius } from './styles';

const {width, height} = Dimensions.get('window');

export default function SpatialTapGesture() {
  const left = useSharedValue(width / 2 - CircleRadius);
  const top = useSharedValue(height / 2 - CircleRadius);
  const previousLeft = useSharedValue(0);
  const previousTop = useSharedValue(0);
  const scale = useSharedValue(0);
  const prevScale = useSharedValue(0);


  const tapGesture = Gesture.Tap().onBegin(({absoluteX, absoluteY}) => {
    prevScale.value = 1;
    previousTop.value = top.value;
    previousLeft.value = left.value;
    prevScale.value = withTiming(0, {duration: 1000});
    top.value = absoluteY - CircleRadius;
    left.value = absoluteX - CircleRadius;
  });

  const rActualStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: left.value,
    top: top.value,
    transform: [{ scale: scale.value }],
  }));

  const rPrevStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: previousLeft.value,
    top: previousTop.value,
    transform: [{ scale: prevScale.value }],
  }));


  const animatedLeft = useDerivedValue(() => {
    return withTiming(left.value, {
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
    });
  });

  const animatedTop = useDerivedValue(() => {
    return withTiming(top.value,  {
      duration: 1000,
      easing: Easing.inOut(Easing.quad),
    });
  });

  const rMovingStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: animatedLeft.value,
    top: animatedTop.value,
  }));

  useAnimatedReaction(() => {
    return left.value;
  }, (current, prev) => {
    if (current !== prev && current !== 0) {
      cancelAnimation(scale);
      scale.value = 0;
      scale.value = withSpring(1);
    }
  });

  return (
    <>
      <GoBack />
      <GestureDetector gesture={tapGesture}>
        <Animated.View style={styles.container}>
          <Animated.View style={[styles.baseCircle, rActualStyle]} />
          <Animated.View style={[styles.baseCircle, rPrevStyle]} />
          <Animated.View style={[styles.baseCircle, rMovingStyle]} />
        </Animated.View>
      </GestureDetector>
    </>
  );
}

