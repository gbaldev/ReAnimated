import { StyleSheet } from "react-native";

export default StyleSheet.create({
    fillStart: {
      flex: 1,
      justifyContent: 'center',
    },
    button: {
      height: 48,
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 24,
    },
    listItem: {
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.05,
      shadowRadius: 10,
    },
    listItemText: {
      padding: 15,
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
    },
    listHeaderContainer: {
      height: 50,
      marginBottom: 16,
      flexDirection: 'row',
      paddingHorizontal: 16,
    },
    headerTitle: {
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 0.6,
      fontWeight: '600',
    },
  });