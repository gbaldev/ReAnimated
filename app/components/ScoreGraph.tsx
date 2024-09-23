import { StyleSheet, useWindowDimensions } from "react-native"
import { Canvas, CornerPathEffect, DashPathEffect, Group, Line, Path, Skia, usePathInterpolation, vec } from "@shopify/react-native-skia";
import { AMOUNT_POINTS, LIGHT_GRAPH_SCORES, PRO_GRAPH_SCORES, STANDARD_GRAPH_SCORES } from "../constants";
import { useDerivedValue, withSpring, withTiming } from "react-native-reanimated";

interface ScoreGraphProps {
  option: 'Light' | 'Standard' | 'Pro',
  height: number,
  width: number,
}

const getPathFromScores = (scores: number[], width: number, height: number) => {
  const skiaPath = Skia.Path.Make();

  for (let i = 0; i < scores.length; i++) {
    skiaPath.lineTo(
      (i * width) / AMOUNT_POINTS,
      getNormilezedY(scores[i], height),
    );
  }
  return skiaPath;
}

const getNormilezedY = (value: number, height: number) => {
  return height - (value/100) * 100;
}

const ScoreGraph: React.ComponentType<ScoreGraphProps> = ({ option, height, width }) => {
  const internalVerticalPadding = 40;
  const internalHorizontalPadding = 30;
  const fixedWidth = width - internalHorizontalPadding * 2;
  const fixedHeight = height - internalVerticalPadding * 2;
  const { width: screenWidth } = useWindowDimensions();
  const progress = useDerivedValue(() => {
    switch(option) {
      case 'Light':
        return 0;
      case 'Standard':
        return 0.5;
      case 'Pro':
        return 1;
    }
  }, [option]);

  const animatedProgress = useDerivedValue(() => {
    withTiming(progress.value);
    return withSpring(progress.value);
  }, []);

  const animatedPath = usePathInterpolation(
    animatedProgress,
    [0, 0.5, 1],
    [
      getPathFromScores(LIGHT_GRAPH_SCORES, fixedWidth, fixedHeight),
      getPathFromScores(STANDARD_GRAPH_SCORES, fixedWidth, fixedHeight),
      getPathFromScores(PRO_GRAPH_SCORES, fixedWidth, fixedHeight)
    ],
  );

  return (
  <Canvas style={{ width, height }} >
    <Group transform={[{translateY: internalVerticalPadding}]}>
      <Line
        p1={vec(0, getNormilezedY(70, fixedHeight))}
        p2={vec(screenWidth, getNormilezedY(70, fixedHeight))}
        strokeWidth={2}
        color={'#cac8c2'}
      >
        <DashPathEffect intervals={[4, 4]} />
      </Line>
    </Group>
    <Group transform={[{translateY: internalVerticalPadding}, { translateX: internalHorizontalPadding}]}>
      <Path
        path={animatedPath}
        color={'#aa00b6'}
        style={'stroke'}
        strokeWidth={4}
        strokeCap={'round'}
      >
        <CornerPathEffect r={20} />
      </Path>
    </Group>
  </Canvas>
  )
};

const styles = StyleSheet.create({});

export default ScoreGraph;
