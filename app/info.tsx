import { BlurView } from "expo-blur";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

interface InfoProps {}

const Info: React.ComponentType<InfoProps> = () => {
  const { info } = useLocalSearchParams<{ info: string }>();
  const [display, setDisplay] = useState<boolean>(true);
  const goBack = useCallback(() => {
    setDisplay(false);
    setTimeout(() => {
      router.back()
    }, 200);
  }, []);

  return (
    <View style={styles.container} onTouchEnd={goBack}>
      <BlurView style={styles.blur} intensity={25} tint='systemMaterialDark'/>
      {display && <Animated.Text style={styles.text} entering={SlideInRight} exiting={SlideOutLeft}>{info}</Animated.Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
  },
  text: {
    color: 'white',
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontWeight: '100',
    fontSize: 18,
    textAlign: 'justify',
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  }
})
export default Info;
