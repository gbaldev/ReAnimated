import GoBack from '@/app/components/GoBack';
import MagicButton from '@/app/components/MagicButton';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';


export default function magicButton() {
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <MagicButton height={100} width={300} onPress={() => console.log('pressed')} />
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
