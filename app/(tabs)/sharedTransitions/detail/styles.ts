import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    image: {
      width: '70%',
      aspectRatio: 1,
      borderRadius: 25,
      borderCurve: 'continue' as any,
    },
    blur: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
  });