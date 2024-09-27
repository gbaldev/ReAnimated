import React, { useState } from 'react';
import { Skia, Canvas, Group, Path, SweepGradient, BlurMask, vec } from '@shopify/react-native-skia';
import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useSharedValue, useDerivedValue, interpolate, withRepeat, withTiming, FlipInEasyY, FlipOutEasyY, runOnJS } from 'react-native-reanimated';


interface SpinningLoaderProps {
  visible: boolean;
}

const SpinningLoader: React.ComponentType<SpinningLoaderProps> = ({ visible }) => {
  const [isLoading, setIsLoading] = useState(true);
  const canvasHeight = 200;
  const canvasWidth = 200;
  const circleStroke = 12;
  const circleRadius = (canvasWidth - circleStroke * 10) / 2;
  const circlePath =
    Skia.Path.Make().addCircle(canvasWidth / 2, canvasHeight / 2, circleRadius);

  const rotate = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const rTransform = useDerivedValue(() => {
    return [{ rotate: rotate.value }, { rotateY: rotateY.value }, { perspective: 400 } ];
  });

  const start = useDerivedValue(() => {
    return interpolate(rotate.value, [0, Math.PI, Math.PI * 2], [0.2, 0.5, 0.2]);
  });

  useEffect(() => {
    if (!visible) {
      rotateY.value = withTiming(1.5, { duration: 150, easing: Easing.ease }, () => {
        rotate.value = 0;
        rotateY.value = 0;
        runOnJS(setIsLoading)(false);
      });
      return;
    }
    setIsLoading(true);
    rotate.value = withRepeat(withTiming(Math.PI * 2, { duration: 1500, easing: Easing.linear }), -1, false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <View style={{ height: canvasHeight, width: canvasWidth }}>
      {isLoading && <Animated.View entering={FlipInEasyY.duration(200)} exiting={FlipOutEasyY}>
        <Canvas style={{ height: canvasHeight , width: canvasWidth }}>
          <Group transform={rTransform} origin={vec(canvasHeight / 2, canvasWidth / 2)}>
            <Path start={start} end={1} path={circlePath} color={'white'} style={'stroke'} strokeCap={'round'} strokeWidth={circleStroke}>
              <SweepGradient colors={['cyan', 'magenta', 'yellow', 'cyan']}
                c={vec(canvasHeight / 2, canvasWidth / 2)} />
              <BlurMask blur={10} style={'solid'}/>
            </Path>
          </Group>
        </Canvas>
      </Animated.View>}
    </View>
  );
};

export default SpinningLoader;
