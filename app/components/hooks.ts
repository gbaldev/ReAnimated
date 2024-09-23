import { useMemo } from "react";
import { SharedValue, useAnimatedStyle, withTiming, withDelay, useDerivedValue } from "react-native-reanimated";

export enum Status {
  BEGIN = 'BEGIN',
  READING = 'READING',
  END = 'END',
}
export const MAX_PROGRESS_INIDICATOR_SIZE = 200;
export const MAX_PROGRESS_BAR_WIDTH = 150;
export const MIN_PROGRESS_INIDICATOR_SIZE = 80;

export const useProgressBar = (progress: SharedValue<number>) => {
    const status: SharedValue<Status> = useDerivedValue(() => {
      if (progress.value === 0) return Status.BEGIN;
      if (progress.value > 0 && progress.value < 1) return Status.READING; 
      return Status.END;
    });

    const rStyle = useAnimatedStyle(() => {
      return ({
        width: withTiming(status.value === Status.READING ? MAX_PROGRESS_INIDICATOR_SIZE : MIN_PROGRESS_INIDICATOR_SIZE),
      });
    }, []);
  
    const rTextStyle = useAnimatedStyle(() => {
      return ({
        opacity: withTiming(status.value === Status.BEGIN ? 1 : 0),
      });
    });
  
    const rIconStyle = useAnimatedStyle(() => {
      return ({
        opacity: withTiming(status.value === Status.END ? 1 : 0)
      })
    });

    const rProgressLabel = useAnimatedStyle(() => ({
      color: '#979797',
      position: 'absolute',
      fontSize: 12,
      bottom: 9,
      fontWeight: 'bold',
      opacity: status.value === Status.READING ? withDelay(200, withTiming(1)) : 0,
    }))
  
    const rReadingStyle = useAnimatedStyle(() => {
      const offset = (MAX_PROGRESS_INIDICATOR_SIZE - MAX_PROGRESS_BAR_WIDTH) / 2;
      return ({
        opacity: status.value === Status.READING ? withDelay(200, withTiming(1)) : 0,
        overflow: 'hidden',
        top: (MIN_PROGRESS_INIDICATOR_SIZE / 2) - 8,
        backgroundColor: '#191919',
        // 4 for the container's border
        width: MAX_PROGRESS_BAR_WIDTH - 4,
        height: 5,
        position: 'absolute',
        borderRadius: 5,
        left: offset,
      })
    });
  
    const rReadedStyle = useAnimatedStyle(() => {
      return ({
        backgroundColor: '#9d9d9d', 
        width: `${progress.value * 100}%`,
      })
    })
    return useMemo(() => ({
      rStyle,
      rTextStyle,
      rIconStyle,
      rReadingStyle,
      rReadedStyle,
      rProgressLabel,
    }), [
      rStyle,
      rTextStyle,
      rIconStyle,
      rReadingStyle,
      rReadedStyle,
      rProgressLabel,
      status,
    ])
    }