import React, { useMemo } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import GoBack from '@/app/components/GoBack';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { BlurMask, Canvas, Group, Path, Skia, vec } from '@shopify/react-native-skia';
import Animated, { useDerivedValue, useSharedValue, withTiming, Easing, useAnimatedStyle, interpolateColor } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';

export default function MicrophoneButton() {
  const AnimatedIcon = useMemo(() => Animated.createAnimatedComponent(FontAwesome), []);
  const circleRadius = 100;
  const canvasPadding = 100;
  const iconSize = 50;
  const canvasHeight = (circleRadius * 2) + canvasPadding;
  const canvasWidth = (circleRadius * 2) + canvasPadding;
  const innnerCircle = Skia.Path.Make().addCircle(canvasWidth / 2, canvasHeight / 2, circleRadius);
  const outerCircle = Skia.Path.Make().addCircle(canvasWidth / 2, canvasHeight / 2, circleRadius + (canvasPadding / 6));
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);
  const outerScale = useSharedValue(1);

  const rInnerTransform = useDerivedValue(() => {
    return [{ scale: scale.value }];
  });

  const rOuterTransform = useDerivedValue(() => {
    return [{ scale: outerScale.value }];
  });

  const iconColor = useDerivedValue(() => {
    return interpolateColor(scale.value, [1, 1.15], ['black', '#00BFFF']);
  }, []);

  const rIconContainerStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: canvasHeight / 2 - iconSize / 2,
      left: canvasWidth / 2 - iconSize / 2,
      zIndex: 100,
      width: iconSize,
      height: iconSize,
      alignItems: 'center',
      pointerEvents: 'none',
      transform: [{ scale: scale.value }],
    };
  }, [scale]);

  const tap = Gesture.Tap()
    .maxDuration(10000)
    .onBegin(() => {
      outerScale.value = 0.9;
      scale.value = withTiming(1.15, { duration: 800, easing: Easing.linear });
      opacity.value = withTiming(1, { duration: 200, easing: Easing.linear }, () => {
        opacity.value = withTiming(0, { duration: 1000, easing: Easing.linear });
        outerScale.value = withTiming(1.15, { duration: 1000, easing: Easing.linear });
      });
    })
    .onEnd(() => {
      scale.value = withTiming(1);
    });

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <View style={{ height: canvasHeight, width: canvasWidth }}>
        <Animated.View style={rIconContainerStyle}>
          <AnimatedIcon name="microphone" size={iconSize} color={iconColor} />
        </Animated.View>
        <GestureDetector gesture={tap}>
          <Canvas style={{ height: canvasHeight, width: canvasWidth }} >
            <Group transform={rInnerTransform} origin={vec(canvasWidth / 2, canvasHeight / 2)}>
              <Path path={innnerCircle} color={'white'} />
              <BlurMask blur={3} style={'solid'}/>
            </Group>
            <Group transform={rOuterTransform} origin={vec(canvasWidth / 2, canvasHeight / 2)}>
              <Path path={outerCircle} color={'white'} style={'stroke'} strokeWidth={10} opacity={opacity}/>
              <BlurMask blur={10} style={'outer'}/>
            </Group>
          </Canvas>
        </GestureDetector>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
