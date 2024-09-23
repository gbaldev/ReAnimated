import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import { Canvas, RadialGradient, useFont, vec } from '@shopify/react-native-skia';
import { Text as SkiaText } from '@shopify/react-native-skia';
import styles from './styles';
import GoBack from '@/app/components/GoBack';

export default function animatableText() {
  const count = useSharedValue(0);
  const counstString = useDerivedValue(() => {
    return Math.floor(count.value).toString();
  }, [count]);
  const fontSize = 80;
  const font = useFont(require('../../../assets/fonts/SF-Pro-Rounded-Bold.otf'), fontSize);
  const canvasWidth = 200;
  const canvasHeight = 200;

  const x = useDerivedValue(() => {
    const textWidth = (font?.measureText(counstString.value).width ?? 0);
    return canvasWidth / 2 - textWidth / 2;
  }, [canvasWidth, font]);

  const y = useDerivedValue(() => {
    return canvasHeight / 2 + fontSize / 2;
  }, [fontSize]);

  const updateCount = () => {
    const nextCount = Math.floor(Math.random() * 100);
    count.value = withTiming(nextCount, {duration: 1000});
  }

  return (
    <View style={styles.container}>
      <GoBack />
      <Canvas style={styles.canvas}>
        <SkiaText text={counstString} font={font} x={x} y={y}>
          <RadialGradient
            c={vec(canvasWidth / 2, canvasHeight / 2)}
            r={canvasWidth / 2}
            colors={['yellow','cyan', 'green', 'magenta', 'green']}
          />
        </SkiaText>
      </Canvas>
      
      <TouchableOpacity onPress={updateCount} style={styles.floating}>
        <FontAwesome name="random" size={24} color={'black'} />
      </TouchableOpacity>
    </View>
  );

}
