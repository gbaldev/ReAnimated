import GoBack from '@/app/components/GoBack';
import ScoreGraph from '@/app/components/ScoreGraph';
import { SegmentedControl } from '@/app/components/SegmentedControl';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';


export type Option = 'Light' | 'Standard' | 'Pro';
const options: Option[] = ['Light', 'Standard', 'Pro'];

export default function AnimatedPath() {
  const [selectedOption, setSelectedOption] = useState<Option>('Standard');
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <SegmentedControl options={options} selectedOption={selectedOption} onOptionPress={setSelectedOption} />
      <ScoreGraph width={width} height={200} option={selectedOption} />
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
