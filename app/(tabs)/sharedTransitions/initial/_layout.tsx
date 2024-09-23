import React from 'react';
import { StyleSheet, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Palette, sharedTransitionsImages } from '../../../constants';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from 'expo-router';
import Animated from 'react-native-reanimated';
import GoBack from '@/app/components/GoBack';
import AnimatedImage from '@/app/components/AnimatedImage';

export default function Initial() {
  const {width} = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const spacing = 20;
  const gap = spacing / 4;
  const itemSize = (width - spacing) / 3;
  const navigation = useNavigation();

  return (
    <Animated.View style={styles.container}>
      <GoBack topOffset={120}/>
      <FlatList
        data={sharedTransitionsImages}
        contentContainerStyle={{ paddingTop: headerHeight }}
        numColumns={3}
        renderItem={({ item, index }) => {
          const tag = index.toString();
          return (
            <TouchableOpacity style={{ marginLeft: gap, marginTop: gap }} onPress={() => {
              navigation.navigate('detail', {
                tag,
                imageUri: item.url,
              });
            }}>
              <AnimatedImage
                source={{uri: item.url}}
                style={{ width: itemSize, height: itemSize }}
                sharedTransitionTag={tag}
                contentFit={'cover'}
                cachePolicy={'memory-disk'}
              />
            </TouchableOpacity>
          );
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.background,
  },
});
