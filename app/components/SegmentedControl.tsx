import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Palette } from '../constants';
import { Option } from '../(tabs)/animatedPath/_layout';

type SegmentedControlProps = {
  options: Option[];
  selectedOption: Option;
  onOptionPress?: (option: Option) => void;
};

const SegmentedControl: React.FC<SegmentedControlProps> = React.memo(
  ({ options, selectedOption, onOptionPress }) => {
    const { width: windowWidth } = useWindowDimensions();

    const internalPadding = 20;
    const segmentedControlWidth = windowWidth - 40;

    const itemWidth =
      (segmentedControlWidth - internalPadding) / options.length;

    const rStyle = useAnimatedStyle(() => {
      return {
        left: withTiming(
          itemWidth * options.indexOf(selectedOption) + internalPadding / 2
        ),
      };
    }, [selectedOption, options, itemWidth]);

    return (
      <View
        style={[
          styles.container,
          {
            width: segmentedControlWidth,
            borderRadius: 20,
            paddingLeft: internalPadding / 2,
          },
        ]}
      >
        <Animated.View
          style={[
            {
              width: itemWidth,
            },
            rStyle,
            styles.activeBox,
          ]}
        />
        {options.map((option: Option) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onOptionPress?.(option);
              }}
              key={option}
              style={[
                {
                  width: itemWidth,
                },
                styles.labelContainer,
              ]}
            >
              <Text style={styles.label}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: Palette.baseGray05,
  },
  activeBox: {
    position: 'absolute',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 3,
    height: '80%',
    top: '10%',
    backgroundColor: Palette.background2,
  },
  labelContainer: { justifyContent: 'center', alignItems: 'center' },
  label: {
    fontFamily: 'SF-Compact-Rounded-Medium',
    fontSize: 16,
  },
});

export { SegmentedControl };
