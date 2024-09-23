import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentContainer: { padding: 10 },
    flatlist: {
      flex: 1,
      width: '100%',
      marginTop: 50
    },
    separator: { height: 10 },
    item: {
      height: 90,
      width: '95%',
      backgroundColor: '#ad98adaa',
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
    }
  });