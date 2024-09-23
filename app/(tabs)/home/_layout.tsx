import React from 'react';
import { FlatList, View } from 'react-native';
import { screens } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppTitle from '@/app/components/AppTitle';
import ScreenButton from '@/app/components/ScreenButton';
import styles from './styles';

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <AppTitle />
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.contentContainer}
        data={screens}
        renderItem={({ item }) => <ScreenButton item={item as any} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}
