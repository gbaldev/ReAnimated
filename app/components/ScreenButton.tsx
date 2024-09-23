import { MaterialIcons } from "@expo/vector-icons";
import { Href, Link, useNavigation } from "expo-router";
import { useCallback, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Dimensions, Text, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";

const {width} = Dimensions.get('window');
const itemMargin = 32;
const itemWidth = width - itemMargin * 2;

interface ScreenButtonProps {
  item: { name: string; route: Href<string | object>, info: string };
}

const ScreenButton: React.ComponentType<ScreenButtonProps> = ({ item }) => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const rStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }]
  }));
  const navigation = useNavigation();

  useEffect(() => {
    scale.value = withTiming(1, {duration: 1000, easing: Easing.elastic(1.1)});
    opacity.value = withTiming(1, {duration: 1000, easing: Easing.linear});
  }, []);

  const goToInfo = useCallback(() => navigation.navigate('info', { info: item.info }), []);

  return (
    <Animated.View style={[styles.item, rStyle]}>
      <Link href={item.route} asChild>
        <TouchableOpacity activeOpacity={1} style={styles.link}>
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </Link>
      <TouchableOpacity style={styles.info} onPress={goToInfo}>
        <MaterialIcons name="info" color={'white'} size={26} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: itemWidth,
    backgroundColor: '#2E2E2E',
    borderColor: '#f3d3f3',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    padding: 20,
    marginVertical: 8,
    borderRadius: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#f3d3d3',
    shadowRadius: 6,
    shadowOpacity: 0.8,
  },
  itemText: {
    fontSize: 18,
    fontFamily: 'SF-Pro-Rounded-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  link: {
    width: '80%',
    alignItems: 'center',
  },
  info: {
    width: '20%',
    alignItems: 'flex-end',
    paddingRight: 12,
  },
})
export default ScreenButton;
