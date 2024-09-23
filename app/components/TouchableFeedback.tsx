import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { StyleProp, View, Text, ViewStyle, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface TouchableFeedbackProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const TouchableFeedback: React.ComponentType<PropsWithChildren<TouchableFeedbackProps>> = ({
  children,
  onPress,
  style
}) => {
  const isActive = useSharedValue<boolean>(false);
  const isButton = typeof children === 'string' || typeof children === 'number'
  const tap = Gesture.Tap()
    .onBegin(() => {
      if (isButton) {
        isActive.value = true;
      }
    })
    .onTouchesUp(() => {
      if (onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      if (isButton) {
        isActive.value = false;
      }
    });

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        isActive.value ? 'rgba(255,255,255, 0.1)' : 'transparent',
      ),
      transform: [
        { scale : withTiming(isActive.value ? 0.95 : 1) }
      ]
    }
  }, []);

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[style, rButtonStyle]}>
        {children === 'backspace' ? (
          <MaterialIcons name={'backspace'} size={30} color='white' />
        ) : (
          <Text style={styles.label}>{children}</Text>
        )}
      </Animated.View>
    </GestureDetector>
  )
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default TouchableFeedback;
