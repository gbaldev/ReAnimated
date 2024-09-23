import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Animated, { useAnimatedRef, useScrollViewOffset } from 'react-native-reanimated';
import { Images } from '../../constants';
import styles, { ItemContainerWidth, ItemInternalPadding, ListItemWidth } from './styles';
import GoBack from '@/app/components/GoBack';
import ListImage from '@/app/components/ListImage';




export default function paralax() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  
  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        style={{ flex: 1}}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={ItemContainerWidth}
        pagingEnabled
        decelerationRate={'fast'}
      >
        {Images.map((i: string, index: number) => (
          <ListImage
            itemWidth={ItemContainerWidth}
            style={{marginHorizontal: ItemInternalPadding }}
            uri={i}
            key={index}
            imageWidth={ListItemWidth}
            scrollOffset={scrollOffset}
            index={index}
          />
        ))}

      </Animated.ScrollView>
    </SafeAreaView>
  );
}

