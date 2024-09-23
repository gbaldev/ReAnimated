import GoBack from '@/app/components/GoBack';
import React from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import styles from './styles';

export default function PanGestures() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const isDragging = useSharedValue(false);
  // Creating a context for last values, we need to
  // keep this in order to smootly run subsequents movements.
  // It's a pretty important concept for gestures.
  const context = useSharedValue({ x: 0, y: 0});

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      isDragging.value = true;
      // set up last state.
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate(({ translationX, translationY }) => {
      // update based in new values considering previous state.
      translateX.value = context.value.x + translationX;
      translateY.value = context.value.y + translationY;
    })
    .onFinalize(() => {
      isDragging.value = false;
    });

  const rotate = useDerivedValue(() => {
    return withSpring(isDragging.value ? '45deg' : '0deg');
  }, []);

  const scale = useDerivedValue(() => {
    return withSpring(isDragging.value ? 0.8 : 1);
  }, []);

  const color = useDerivedValue(() => {
    if (isDragging.value) {
      return '#632300';
    }

    const isInWhiteSpace = translateY.value < 0;
    const isInBlackSpace = translateY.value > 0;

    if (isInWhiteSpace) {
      return '#000';
    }

    if (isInBlackSpace) {
      return '#fff';
    }

    return '#632300';
  }, []);

  const animatedColor = useDerivedValue(() => {
    return withTiming(color.value);
  }, []);

  const animatedBorderWidth = useDerivedValue(() => {
    return withTiming(color.value === '#fff' || isDragging.value ? 0 : 1);
  }, []);

  const rStyle = useAnimatedStyle(() => ({
    borderWidth: animatedBorderWidth.value,
    borderColor: 'white',
    backgroundColor: animatedColor.value,
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: rotate.value },
      { scale: scale.value },
    ],
  }));

  return (
    <View style={styles.container}>
      <GoBack />
      <GestureDetector gesture={panGesture}>
        <Animated.View
          style={[styles.sqare, rStyle]}
        />
      </GestureDetector>
      <View style={styles.background}/>
    </View>
  );
}
