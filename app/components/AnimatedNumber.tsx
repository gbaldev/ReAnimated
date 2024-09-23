import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInDown, FadeOutDown, LinearTransition, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface AnimatedNumberProps {
  number: string
}
const AnimatedNumber: React.ComponentType<AnimatedNumberProps> = ({number}) => {
  const splittedNumber = useMemo(() => number.split(''), [number]);
  const rContainerStyle = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(1.05 - 0.05 * splittedNumber.length)}],
  }), [number]);
  return (
    <Animated.View layout={LinearTransition} style={[styles.container, rContainerStyle]}>
      {splittedNumber.map(
        (n, i) => {
          return (
            <Animated.Text
              layout={LinearTransition}
              entering={FadeInDown}
              exiting={FadeOutDown}
              style={styles.text}
              key={i}>
              {n}
            </Animated.Text>
          );
        })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AnimatedNumber;
