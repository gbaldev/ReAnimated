import { Dimensions, StyleSheet } from "react-native";

export const canvasHeight = 600;
const { width: screenWidth } = Dimensions.get('screen');
export const canvasWidth = screenWidth * 0.95;
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    slider: {
      width: '95%',
      marginTop: 60,
      alignSelf: 'center',
    },
    canvas: {
      marginTop: 25,
      alignSelf: 'center',
      height: canvasHeight,
      width: canvasWidth,
      borderRadius: 25,
      overflow: 'hidden',
    },
  });