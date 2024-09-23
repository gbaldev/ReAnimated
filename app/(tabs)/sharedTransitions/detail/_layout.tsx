import React from 'react';
import { BlurView } from 'expo-blur';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import styles from './styles';
import AnimatedImage from '@/app/components/AnimatedImage';

interface DetailProps {}

const Detail: React.ComponentType<DetailProps> = () => {
  const {imageUri, tag} = useLocalSearchParams<{ tag: string, imageUri: string}>();
  const navigation = useNavigation();
  const changeX = useSharedValue(0);
  const changeY = useSharedValue(0);
  const scale = useDerivedValue(() => {
    if (changeY.value === 0) {
      return 1;
    } else {
      return 0.8;
    }
  });

  const panGesture = Gesture.Pan()
    .onChange(event => {
      changeX.value = event.translationX;
      changeY.value = event.translationY;

      if (Math.abs(changeX.value) > 100 || Math.abs(changeY.value) > 100) {
        runOnJS(navigation.goBack)();
      }
    })
    .onFinalize(() => {
      changeX.value = withTiming(0);
      changeY.value = withTiming(0);
    });


  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: changeX.value }, { translateY: changeY.value }, { scale: withTiming(scale.value) }],
  }), []);

  return (
    <View style={styles.container}>
      <BlurView
        intensity={25}
        tint="systemMaterialDark"
        style={styles.blur}
      />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={rStyle}>
          <AnimatedImage
            source={{ uri: imageUri }}
            style={styles.image}
            contentFit={'cover'}
            cachePolicy={'memory-disk'}
            sharedTransitionTag={tag}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default Detail;
