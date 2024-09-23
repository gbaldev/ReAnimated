import { Palette } from '@/app/constants';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    height: 48,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
  },
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesContainer: {
    backgroundColor: Palette.surface,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    minHeight: 200,
  },
  inputHeader: {
    textTransform: 'uppercase',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 4,
    color: Palette.primary,
    fontWeight: '500',
  },
  inputText: {
    fontSize: 20,
    color: Palette.text,
    marginTop: 16,
  },
});
