import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const GoBack: React.ComponentType<{topOffset?: number}> = ({ topOffset }) => {
  return (
    <TouchableOpacity onPress={router.dismissAll} style={[styles.button, topOffset ? { top: topOffset } : undefined]}>
      <MaterialIcons name="arrow-back" size={32} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    zIndex: 2,
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 60,
    left: 30,
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

export default GoBack;
