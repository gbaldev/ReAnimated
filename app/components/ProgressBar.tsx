import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, { SharedValue, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import { MIN_PROGRESS_INIDICATOR_SIZE, useProgressBar } from './hooks';
import { ReText } from 'react-native-redash';

interface ProgresBarrComponent {
  timeLeft: number;
  progress: SharedValue<number>;
  scrollToTop: () => void;
}

const ProgressBar: React.ComponentType<ProgresBarrComponent> = ({timeLeft = 1, progress, scrollToTop = () => {}}) => {
  const {rIconStyle, rReadedStyle, rReadingStyle, rStyle, rTextStyle, rProgressLabel} = useProgressBar(progress);
  
  const perc = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100).toString()}%`;
  })
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.timeLeft, rStyle]}>
        <Animated.Text style={[styles.text, rTextStyle]}>{timeLeft} {timeLeft > 1 ? 'mins' : 'min'}</Animated.Text>
        <Animated.View style={[styles.arrow, rIconStyle]} onTouchEnd={scrollToTop}>
          <AntDesign name={"arrowup"} size={32} color={'#979797'} />
        </Animated.View>
        <ReText text={perc} style={rProgressLabel} />
        <Animated.View style={[rReadingStyle]}>
            <Animated.View style={[styles.bar, rReadedStyle]}/>
        </Animated.View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: MIN_PROGRESS_INIDICATOR_SIZE,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  timeLeft: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454343',
    borderColor: '#2d2c2c',
    borderWidth: 4,
    borderRadius: MIN_PROGRESS_INIDICATOR_SIZE / 2,
  },
  text: {
    color: '#979797',
    fontWeight: 'bold',
  },
  arrow: {position: 'absolute'},
  bar: {
    height: 5,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
  },
});

export default ProgressBar