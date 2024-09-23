
import GoBack from '@/app/components/GoBack';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export default function Add() {
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
