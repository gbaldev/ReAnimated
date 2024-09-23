import { MIN_PROGRESS_INIDICATOR_SIZE } from "@/app/components/hooks";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#111',
    },
    scrollview: {
      flex: 1,
      paddingHorizontal: 16,
      marginTop: 50,
    },
    contentContainer: {
      paddingBottom: MIN_PROGRESS_INIDICATOR_SIZE + 10,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
      paddingVertical: 5,
    },
    description: {
      fontSize: 18,
      color: 'gray',
      paddingVertical: 3,
    },
    section: {
      paddingVertical: 10,
    }
  });