import React, { useCallback, useState } from 'react';
import { View, Alert, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GoBack from '@/app/components/GoBack';
import AnimatedNumber from '@/app/components/AnimatedNumber';
import ButtonsGrid, { ButtonItem } from '@/app/components/ButtonsGrid';
import styles from './styles';

export default function FamilyNumberInput() {
  const [number, setNumber] = useState<string>('');

  const handleOnPress = useCallback((item: ButtonItem) => {
    if (item === 'backspace') {
      setNumber(p => p.slice(0, -1));
      return;
    }
    if (number.length === 10) {
      Alert.alert('Maximum Reached', 'The maximum limit of 10 items has been reached.');
      return;
    } else {
      setNumber(p => `${p}${item}`);
    }
  }, [number]);

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <View style={styles.numberContainer}>
        <AnimatedNumber number={number}/>
        <LinearGradient
          style={styles.gradient}
          locations={[0, 0.7]}
          colors={['rgba(0,0,0,0)', 'black']}
        />
      </View>
      <View style={styles.gridContainer}>
        <ButtonsGrid onButtonPressed={handleOnPress}/>
      </View>
    </SafeAreaView>
  );
}
