import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    count: {
      fontSize: 80,
      fontWeight: 'bold',
      fontFamily: 'SF-Pro-Rounded-Bold',
      width: 200,
      textAlign: 'center',
    },
    floating: {
      position: "absolute",
      bottom: 48,
      right: 32,
      width: 64,
      aspectRatio: 1,
      borderRadius: 32,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    canvas: {
      width: 200,
      height: 200,
    },
  });
  