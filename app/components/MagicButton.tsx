import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurMask, Canvas, Group, RoundedRect, SweepGradient, vec } from '@shopify/react-native-skia';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

interface MagicButtonProps {
  height: number;
  width: number;
  onPress: () => void;
}

const MagicButton: React.ComponentType<MagicButtonProps> = ({ height: initialHeight, width: initialWidth, onPress }) => {
  const buttonPadding = 10;
  const canvasPadding = 300;
  const width = initialWidth + canvasPadding;
  const height = initialHeight + canvasPadding;
  const x = canvasPadding / 2;
  const y = canvasPadding / 2;
  const center = vec(width/2 + x, height/2 + y);
  const isTouched = useSharedValue(false);

  const tap = Gesture.Tap()
    .maxDuration(10000)
    .onBegin(() => {
      isTouched.value = true;
    })
    .onTouchesUp(() => {
      if (onPress) {
        runOnJS(onPress)()
      }
    })
    .onFinalize(() => {
      isTouched.value = false;
    })
    
  const scale = useDerivedValue(() => {
    return withTiming(isTouched.value ? 1.2 : 1, { duration: 1000 })
  }, []);

  
  const rotate = useDerivedValue(() => {
    return withTiming(isTouched.value ? Math.PI * 2 : 0, { duration: 1000 });
  }, [])
  
  const transform = useDerivedValue(() => {
    return [{ rotate: rotate.value }];
  }, [])
  
  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const blur = useDerivedValue(() => {
    return withTiming(isTouched.value ? 40 : 0, { duration: 1000 });
  }, [])

  return (
      <Animated.View style={rStyle}>
        <Canvas style={[styles.canvas, { height: height, width: width }]}>
          <Group
            origin={vec(x + initialWidth / 2, y + initialHeight / 2)}
            transform={transform}>
            <RoundedRect
              x={x}
              y={y}
              width={initialWidth}
              height={initialHeight}
              r={initialWidth/2}
              color={'black'}
            >
              <SweepGradient
                c={center}
                colors={["cyan", "magenta", "magenta", "yellow", "cyan"]}
              />
              <BlurMask blur={blur} style={'solid'}/>
            </RoundedRect>
          </Group >
          <RoundedRect
            x={buttonPadding / 2 + x}
            y={buttonPadding / 2 + y}
            width={initialWidth - buttonPadding}
            height={initialHeight - buttonPadding}
            r={initialWidth - buttonPadding/ 2}
            color={'black'}
          />
        </Canvas>
      {/* We can not use the detector just over the canvas, becaues the amount tappable will be
          greater than the button itself, we should create a fake view over the button with the same
          size in order to handle the gesture properly https://shopify.github.io/react-native-skia/docs/animations/gestures/#element-tracking  */}
        <GestureDetector gesture={tap}>
          <Animated.View style={{ position: 'absolute', top: x + buttonPadding / 2, left: y + buttonPadding / 2, height: initialHeight - buttonPadding, width: initialWidth - buttonPadding, borderRadius: 50, zIndex: 1,}} />
        </GestureDetector>
      </Animated.View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    height: 100,
    width: 100,
  },
});

export default MagicButton;
