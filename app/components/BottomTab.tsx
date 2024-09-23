import React from 'react';
import { StyleSheet, View, useWindowDimensions, TouchableOpacity } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getIconByScreenName, tabsScreenNames } from '../constants';
import { Href, router, usePathname } from 'expo-router';
import AnimatedShowableView from './AnimatedShowableView';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import ActualPath from './ActualPath';

const getRoute = (screenName: string) => `/bottomTabAnimation/(tabs)/${screenName}` as Href<string | object>;

const tabBarItemHeight = 65;
const BottomTab: React.ComponentType<{}> = () => {
  const { bottom } = useSafeAreaInsets();
  const { width: screenWidth } = useWindowDimensions();
  const paddingHorizontal = screenWidth * 0.05;
  const containerWidth = screenWidth * 0.85;
  const tabBarItemWidth = (containerWidth - (paddingHorizontal * 2 )) / Object.values(tabsScreenNames).length;
  const isCurrentPathname = (screenName: string) => !!usePathname().toLowerCase().match(screenName.toLocaleLowerCase());
  const pathName = usePathname();
  
  const rStyle = useAnimatedStyle(() => {
    const index = Object.values(tabsScreenNames).indexOf(pathName.replace('/bottomTabAnimation/', '') as any);
    return {
      left: withTiming(paddingHorizontal + tabBarItemWidth * index),
      width: tabBarItemWidth,
    }
  }, [paddingHorizontal, tabBarItemWidth, pathName]);

  return (
    <View style={[styles.container, { marginBottom: bottom, width: containerWidth, paddingHorizontal }]}>
      <Animated.View style={[styles.highlighted, rStyle]}>
        <ActualPath height={tabBarItemHeight} width={tabBarItemWidth}/>
      </Animated.View>
        {Object.values(tabsScreenNames).map((screenName, i) => {
          return (
            <TouchableOpacity key={`${screenName}${i}`} style={styles.innerContainer} onPress={() => router.navigate(getRoute(screenName))}>
              <AnimatedShowableView isVisible={isCurrentPathname(screenName)}>
                {getIconByScreenName(screenName)}
              </AnimatedShowableView>
            </TouchableOpacity>
          )
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: tabBarItemHeight,
    borderRadius: 30,
    borderCurve: 'continuous',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlighted: { 
    height: tabBarItemHeight,
    opacity: 0.5,
    alignItems: 'center',
    position: 'absolute',
  },
})
export default BottomTab;