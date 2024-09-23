import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Animated, { clamp, useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { getReadignTime, reanimatedAnimations } from '../../constants';
import GoBack from '@/app/components/GoBack';
import ProgressBar from '@/app/components/ProgressBar';
import styles from './styles';

export default function ScrollablePercentage() {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const progress = useSharedValue(0);
  const contentHeight = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      progress.value = clamp(event.contentOffset.y / (event.contentSize.height - contentHeight.value), 0 , 1);
    },
  });

  const readingTime = useMemo(() => {
    return getReadignTime(
      reanimatedAnimations.map(({title, description}) => `${title} ${description}`).join(' ')
    );
  }, []);

  const scrollToTop = useCallback(() => scrollViewRef.current?.scrollTo({y: 0}), [scrollViewRef]);

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Animated.ScrollView
        ref={scrollViewRef}
        style={styles.scrollview}
        contentContainerStyle={styles.contentContainer}
        onScroll={onScroll}
        // 1 frame per 16ms => 60fps 1/60 = 16ms
        scrollEventThrottle={16}
        onLayout={(e) => {
          contentHeight.value = e.nativeEvent.layout.height;
        }}
      >
        {reanimatedAnimations.map(
          ({ title, description }, key) => {
            return (
              <View key={key} style={styles.section}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
            );
          })}
      </Animated.ScrollView>
      <ProgressBar timeLeft={readingTime} progress={progress} scrollToTop={scrollToTop}/>
    </SafeAreaView>
  );
}

