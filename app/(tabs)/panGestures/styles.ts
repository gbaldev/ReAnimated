import { StyleSheet } from 'react-native';

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
    backgroundColor: '#632300',
    borderRadius: 25,
    borderCurve: 'continuous',
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#000',
  },
});
