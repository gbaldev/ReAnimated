import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { useMemo } from 'react';
import MasonryList from '@react-native-seoul/masonry-list';
import { useRouter } from 'expo-router';
import { Palette } from '@/app/constants';
import { useNotes } from '@/app/(tabs)/navigatorShader/atoms';
import { useTransition } from '../../providers/transitionsProvider';
import Animated, { FadeInDown, FadeOutDown, LinearTransition } from 'react-native-reanimated';
import { PressableScale } from '@/app/components/PressableScale';
import GoBack from '@/app/components/GoBack';
import styles from './styles';

export default function HomeScreen() {
  const navigation = useRouter();
  const [notes] = useNotes();
  const { prepareTransition } = useTransition();
  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

  const gap = 35 / 3;

  const ListHeaderComponent = useMemo(() => {
    return (
      <View style={styles.listHeaderContainer}>
        <View style={styles.fillStart}>
          <Text
            style={[
              {
                color: Palette.primary,
              },
              styles.headerTitle,
            ]}>
            Add Note
          </Text>
        </View>
        <PressableScale
          onPress={() => {
            prepareTransition();
            navigation.navigate('/navigatorShader/(stack)/detail');
          }}
          style={[
            styles.button,
            {
              backgroundColor: Palette.primary,
            },
          ]}>
          <AntDesign name="plus" size={24} color="white" />
        </PressableScale>
      </View>
    );
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: Palette.background }}>
      <GoBack />

      <MasonryList
        data={notes}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{
          paddingTop: safeTop + 8,
          paddingBottom: safeBottom,
          backgroundColor: Palette.background,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        // MasonryList is not retrieving the correct type for renderItem
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        renderItem={({ item, i: index }: { item: NoteType; i: number }) => {
          return (
            <Animated.View
              layout={LinearTransition}
              entering={FadeInDown.delay(index * 100)}
              exiting={FadeOutDown}
              style={[
                {
                  marginLeft: gap,
                  marginRight: index % 2 !== 0 ? gap : 0,
                  marginBottom: gap,
                  backgroundColor: Palette.surface,
                },
                styles.listItem,
              ]}>
              <Text
                style={[
                  {
                    color: Palette.text,
                  },
                  styles.listItemText,
                ]}>
                {item.title}
              </Text>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
