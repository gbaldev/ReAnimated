import React from 'react';
import { View, StyleSheet, Text, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import { Palette } from '@/app/constants';
import { useNotes } from '@/app/(tabs)/navigatorShader/atoms';
import { useTransition } from '../../providers/transitionsProvider';
import { PressableScale } from '@/app/components/PressableScale';
import styles from './styles';

export default function DetailScreen() {
  const { goBack } = useNavigation();
  const [, setNotes] = useNotes();
  const { runTransition } = useTransition();
  const noteText = useRef('');

  const updateText = useCallback((text: string) => {
    noteText.current = text;
  }, []);

  const onClose = useCallback(async () => {
    runTransition();
    setTimeout(() => goBack(), 1000);
  }, [goBack, runTransition]);

  const onSave = useCallback(async () => {
    if (!noteText.current) {
      Alert.alert('Empty Note', 'Please write something before saving');
      return;
    }

    runTransition(() => {
      setNotes(prev => {
        return [
          {
            id: (prev.length + 1).toString(),
            title: noteText.current,
          },
          ...prev,
        ];
      });
    });

    goBack();
  }, [goBack, runTransition, setNotes]);

  const { top: safeTop } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Palette.background,
        paddingHorizontal: 8,
      }}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255, 0, 0, 0.05)', 'transparent', 'transparent']}
        style={StyleSheet.absoluteFill}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingTop: safeTop + 16,
        }}>
        <PressableScale onPress={onClose} style={styles.button}>
          <AntDesign name="close" size={32} color={Palette.text} />
        </PressableScale>
        <View style={styles.fillCenter}>
          <Text
            style={{
              fontSize: 18,
              color: Palette.text,
            }}>
            Create a new Note
          </Text>
        </View>
        <PressableScale
          onPress={onSave}
          style={[
            styles.button,
            {
              backgroundColor: Palette.primary,
            },
          ]}>
          <AntDesign name="check" size={24} color="white" />
        </PressableScale>
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.inputHeader}>Add a new note</Text>
        <TextInput
          onChangeText={updateText}
          placeholder="Write your ideas here..."
          style={styles.inputText}
          selectionColor={Palette.primary}
        />
      </View>
    </View>
  );
}
