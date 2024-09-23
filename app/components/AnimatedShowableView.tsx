import React from 'react';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { PropsWithChildren } from 'react';

interface AnimatedShowableViewProps {
  isVisible?: boolean;
  minOpacity?: number;
}

const AnimatedShowableView: React.ComponentType<PropsWithChildren<AnimatedShowableViewProps>> = ({ isVisible = true, minOpacity = 0.3, children}) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      flex: 1,
      alignItems: 'center',
      opacity: withTiming(isVisible ? 1 : minOpacity),
    };
  }, [isVisible]);

  return (
    <Animated.View style={rStyle}>
      {children}
    </Animated.View>
  );
};

export default AnimatedShowableView;
