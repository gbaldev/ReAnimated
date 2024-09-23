import { useMemo } from "react";
import { Keyframe } from "react-native-reanimated";

export const useCustomKeyFrames = () => {
  const Perspective = 150;

  const initialKeyFrame = {
    opacity: 0,
    transform: [{ perspective: Perspective }, { rotateX: '-25deg' }, { translateY: 75 }],
  };

  const finalKeyFrame = {
    opacity: 1,
    transform: [{ perspective: Perspective }, { rotateX: '0deg' }, { translateY: 0 }],
  }

  const FlipIn = new Keyframe({
    from: initialKeyFrame,
    to: finalKeyFrame,
  }).duration(250);

  const FlipOut = new Keyframe({
    from: finalKeyFrame,
    to: {...initialKeyFrame, transform: [{ perspective: 100 }, { rotateX: '25deg' }, { translateY: -75 }]},
  }).duration(250);

  return useMemo(
    () => ({
      FlipIn,
      FlipOut,
    }), [
      FlipIn,
      FlipOut
    ]);
}