import { StyleSheet } from "react-native";

const SqareSize = 120;
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sqare: {
      height: SqareSize,
      width: SqareSize,
      backgroundColor: '#232300',
      borderRadius: 25,
    },
    button: {
      padding: 16,
      backgroundColor: '#829182',
      borderRadius: 25,
      position: 'absolute',
      bottom: 50,
      right: 50,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 12,
      color: "#ffff"
    }
  });
  