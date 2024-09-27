import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import GoBack from '@/app/components/GoBack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SpinningLoader from '@/app/components/SpinningLoader';
import Animated, { SlideInLeft, SlideOutRight } from 'react-native-reanimated';


export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <SpinningLoader visible={isLoading} />
      <TouchableOpacity onPress={() => setIsLoading(p => !p)}>
        {isLoading && <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
          <Text style={styles.text}>Hide</Text>
        </Animated.View>}
        {!isLoading && <Animated.View entering={SlideInLeft} exiting={SlideOutRight}>
          <Text style={styles.text}>Show</Text>
        </Animated.View>}
      </TouchableOpacity>
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
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
