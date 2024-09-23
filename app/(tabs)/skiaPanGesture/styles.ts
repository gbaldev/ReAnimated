import { StyleSheet } from 'react-native';

export const sqareSize = 100;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  fakeSqare: {
    position: 'absolute',
    height: sqareSize,
    width: sqareSize,
    zIndex: 1,
    backgroundColor: 'transparent',
    borderRadius: 30,
    borderCurve: 'continuous',
  },
  flex1: {
    flex:1,
  },
});
