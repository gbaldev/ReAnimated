import GoBack from '@/app/components/GoBack';
import MButton from '@/app/components/MagicButton';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';


export default function MagicButton() {
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <MButton height={100} width={300} onPress={() => console.log('pressed')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
