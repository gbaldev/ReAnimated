import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

const AddItem: React.ComponentType<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialIcons name="plus-one" size={32} color={'black'} />
    </TouchableOpacity>
  );
};

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
    right: 30,
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

export default AddItem;
