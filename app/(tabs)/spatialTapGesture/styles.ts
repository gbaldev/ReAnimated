import { StyleSheet } from "react-native";

export const CircleRadius = 15;

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    baseCircle: {
      height: CircleRadius * 2,
      width: CircleRadius * 2,
      backgroundColor: '#2f2f2f',
      borderRadius: CircleRadius,
      borderCurve: 'continuous',
    },
    background: {
      zIndex: -1,
      position: 'absolute',
      top: '50%',
      left: 0,
      width: '100%',
      height: '50%',
      backgroundColor: '#000',
    },
  });