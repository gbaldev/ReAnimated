import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { BlurMask, Canvas, Group, Rect, RoundedRect, rect } from '@shopify/react-native-skia';
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import styles, { sqareSize } from './styles';
import GoBack from '@/app/components/GoBack';


export default function SkiaPanGesture() {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const translateX = useSharedValue((screenWidth / 2) - (sqareSize / 2));
  const translateY = useSharedValue((screenHeight / 2) - (sqareSize / 2));
  const context = useSharedValue({ x: 0, y: 0 });
  const isDragging = useSharedValue(false);
  const rotate = useDerivedValue(() => {
    return withTiming(isDragging.value ? Math.PI / 4 : 0);
  });

  const scale = useDerivedValue(() => {
    return withTiming(isDragging.value ? 1.2 : 1);
  }, []);

  const rTransformation = useDerivedValue(() => {
    return [{ rotate: rotate.value }, { scale: scale.value }];
  }, []);

  const fakeRotation = useDerivedValue(() => {
    return withTiming(rotate.value === 0 ? '0deg' : '45deg');
  }, []);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { rotate: fakeRotation.value }, { scale: scale.value }],
  })
  );

  const tap = Gesture.Pan()
    .onBegin(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
      isDragging.value = true;
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onFinalize(() => {
      isDragging.value = false;
    });

  const origin = useDerivedValue(() => {
    return {
      x: translateX.value + sqareSize / 2,
      y: translateY.value + sqareSize / 2,
    };
  }, []);

  const whiteBackground = rect(0, 0, screenWidth, screenHeight / 2);
  const blackBackground = rect(0, screenHeight / 2, screenWidth, screenHeight / 2);
  const blur = useDerivedValue(() => {
    return withTiming(isDragging.value ? 15 : 0);
  });

  return (
    <View style={styles.flex1}>
      <GoBack />
      <Canvas style={styles.container}>
        <Rect
          rect={whiteBackground}
          color={'white'}
        />
        <Rect
          rect={blackBackground}
          color={'black'}
        />
        <Group clip={whiteBackground}>
          <Group transform={rTransformation} origin={origin}>
            <RoundedRect
              x={translateX}
              y={translateY}
              height={sqareSize}
              width={sqareSize}
              color={'black'}
              origin={origin}
              transform={rTransformation}
              r={30}
            >
              <BlurMask blur={blur} style={'solid'} />
            </RoundedRect>
          </Group>
        </Group>
        <Group clip={blackBackground}>
          <Group transform={rTransformation} origin={origin}>
            <RoundedRect
              x={translateX}
              y={translateY}
              height={sqareSize}
              width={sqareSize}
              color={'white'}
              origin={origin}
              transform={rTransformation}
              r={30}
            >
              <BlurMask blur={blur} style={'solid'} />
            </RoundedRect>
          </Group>
        </Group>
      </Canvas>
      <GestureDetector gesture={tap} >
        <Animated.View
          style={[styles.fakeSqare, rStyle]}
        />
      </GestureDetector>
    </View>
  );
}

