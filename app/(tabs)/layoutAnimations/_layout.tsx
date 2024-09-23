import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { generateRandomColor } from '../../utils';
import { useCustomKeyFrames } from '../../hooks';
import styles from './styles';
import GoBack from '@/app/components/GoBack';
import DeleteItem from '@/app/components/DeleteItem';
import AddItem from '@/app/components/AddItem';

const layoutAnimations = () => {
  const [ids, setIds] = useState<string[]>([]);
  const { FlipIn, FlipOut } = useCustomKeyFrames();
  const deleteItem = (index: number) => {
    setIds(_ids => _ids.filter((_, i) => i !== index));
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      {ids.length > 0 && <DeleteItem onPress={() => deleteItem(ids.length - 1)} />}
      <AddItem
        onPress={() => {
          setIds(ids => [...ids, generateRandomColor()]);
        }}
      />
      <FlatList
        style={styles.flatlist}
        data={ids}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        renderItem={({item}) => {
          return (
            <Animated.View
              layout={LinearTransition.duration(700)}
              key={`${item}`}
              style={[styles.item, { backgroundColor: item }]}
              entering={FlipIn.duration(200)}
              exiting={FlipOut.duration(200)}
            >
              <Text style={styles.text}>{item}</Text>
            </Animated.View>
          )
        }}
      />
    </SafeAreaView>
  );
}

export default layoutAnimations;