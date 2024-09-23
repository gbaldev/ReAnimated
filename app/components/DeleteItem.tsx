import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import AnimatedTouchableOpacity from "./AnimatedTouchableOpacity";
import { StretchInX, StretchOutX } from "react-native-reanimated";

const DeleteItem: React.ComponentType<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <AnimatedTouchableOpacity entering={StretchInX} exiting={StretchOutX} onPress={onPress} style={styles.button}>
      <MaterialIcons name='delete' size={32} color={'black'} />
    </AnimatedTouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    zIndex: 1,
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    right: 80,
    backgroundColor: 'white',
    shadowOffset: {
      height: 3,
      width: 3,
    },
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});

export default DeleteItem;