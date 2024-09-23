import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue, withTiming, withSequence, useAnimatedStyle, Easing } from "react-native-reanimated";
import { title } from "../constants";


const AppTitle = () => {
  const isFocused = useIsFocused();
  const yValues =  title.map(() => useSharedValue(0));
  const xValues =  title.map(() => useSharedValue(0));
  const rValues =  title.map(() => useSharedValue('0deg'));
  const hoverGestures = title.map((_, i) => Gesture.Tap().onBegin(() => {
    rValues[i].value = withTiming('360deg', {duration: 2000, easing: Easing.bounce});
  }).onFinalize(() => {
    rValues[i].value = withTiming('0deg');
  }));
  
  useEffect(() => {
    if (isFocused) {
      yValues.forEach((yValue, index) => {
        yValue.value = withSequence(
          withTiming(Math.random() * 10, { duration: 600, easing: Easing.linear }),
          withTiming(Math.random() * 10, { duration: 600, easing: Easing.linear }),
          withTiming(Math.random() * 10, { duration: 600, easing: Easing.linear }),
          withTiming(0, { duration: 600, easing: Easing.linear }),
        );
      });
      xValues.forEach((xValue, index) => {
        xValue.value = withSequence(
          withTiming(Math.random() * 3, { duration: 600, easing: Easing.linear }),
          withTiming(Math.random() * 3, { duration: 600, easing: Easing.linear }),
          withTiming(Math.random() * 3, { duration: 600, easing: Easing.linear }),
          withTiming(0, { duration: 600, easing: Easing.linear }),
        );
      });
      rValues.forEach((rValue, index) => {
        rValue.value = withSequence(
          withTiming(`${Math.random() * 500}deg`, { duration: 600, easing: Easing.linear }),
          withTiming(`${Math.random() * 500}deg`, { duration: 600, easing: Easing.linear }),
          withTiming(`${Math.random() * 500}deg`, { duration: 600, easing: Easing.linear }),
          withTiming('0deg', { duration: 600, easing: Easing.linear }),
        );
      });
    }
  }, [isFocused]);

  return (
    <View style={{ flexDirection: 'row' }}>
      {title.map((letter, index) => {
        const rStyle = useAnimatedStyle(() => ({
          transform: [{ translateY: yValues[index].value }, { translateX: xValues[index].value }, { rotate: rValues[index].value }]
        }));

        return (
        <GestureDetector gesture={hoverGestures[index]} key={index}>
          <Animated.Text style={[styles.title, rStyle]}>{letter}</Animated.Text>
        </GestureDetector>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    padding: 3,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
});
export default AppTitle;
