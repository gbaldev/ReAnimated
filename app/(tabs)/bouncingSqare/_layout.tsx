import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import styles from './styles';
import GoBack from '@/app/components/GoBack';

const MaxTranslationAmount = 100;

export default function bouncingSqare() {
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
      { rotate: `${rotate.value}deg`},
    ],
  })); 

  const move = useCallback(() => {
    const tX = Math.random() * MaxTranslationAmount * 2 - MaxTranslationAmount;
    const tY = Math.random() * MaxTranslationAmount * 2 - MaxTranslationAmount;
    translateX.value = withSpring(tX);
    translateY.value = withSpring(tY);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Animated.View 
        onTouchStart={() => {
          scale.value = withTiming(1.2);
        }}
        onTouchEnd={() => {
          scale.value = withTiming(1);
          rotate.value = withTiming(rotate.value + 90);
        }}
        style={[styles.sqare, rStyle]}
      />
      <TouchableOpacity onPress={move} style={styles.button}>
        <Text style={styles.text}> Move me!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
