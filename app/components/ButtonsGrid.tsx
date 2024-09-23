import React from 'react';
import { View, StyleSheet } from 'react-native';
import TouchableFeedback from './TouchableFeedback';

const buttonItems = [1 , 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'backspace'] as const;
export type ButtonItem = (typeof buttonItems)[number]

interface ButtonsGridProps {
  onButtonPressed: (item: ButtonItem) => void;
}

const ButtonsGrid: React.ComponentType<ButtonsGridProps> = ({ onButtonPressed }) => {
  return (
    <View style={styles.container}>
      {buttonItems.map(item => (
        <View
          key={item}
          style={styles.buttonContainer}
        >
          <TouchableFeedback onPress={() => onButtonPressed(item)} style={styles.button}>
            {item}
          </TouchableFeedback>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    borderCurve: 'continuous',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '33.333%',
    height: '25%',
    padding: 15,
  },
});

export default ButtonsGrid;
