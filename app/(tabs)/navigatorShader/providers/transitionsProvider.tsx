import { directionalWarpShader } from "@/app/constants";
import { transition } from "@/app/(tabs)/helpers/transition";
import { Canvas, Fill, ImageShader, Shader, SkImage, makeImageFromView } from "@shopify/react-native-skia";
import { PropsWithChildren, createContext, useCallback, useContext, useRef } from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, { runOnJS, useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated";

const TransitionsContext = createContext({
  prepareTransition: async () => {},
  runTransition: async (c?: () => void) => {},
})

interface TransitionsProviderProps {}

const TransitionsProvider: React.ComponentType<PropsWithChildren<TransitionsProviderProps>> = ({ children }) => {
  const viewRef = useRef<View>(null);
  const firstImage = useSharedValue<SkImage | null>(null);
  const secondImage = useSharedValue<SkImage | null>(null);
  const progress = useSharedValue(0);
  const {height, width} = useWindowDimensions();

  const prepareTransition = useCallback(async () => {
      const imageSnapshot = await makeImageFromView(viewRef);
      firstImage.value = imageSnapshot;
  }, [firstImage]);

  const runTransition = useCallback(async (exitingCallback?: () => void) => {
    const imageSnapshot = await makeImageFromView(viewRef);
    secondImage.value = imageSnapshot;
    progress.value = withTiming(
      1,
      { duration: 2000 },
      isFinished => {
        if (isFinished) {
          firstImage.value = null;
          secondImage.value = null;
          progress.value = 0;
          if (exitingCallback) {
            runOnJS(exitingCallback)();
          }
        }
      }
    );
  }, [progress, secondImage, firstImage]);

  const shader = transition(directionalWarpShader);

  const uniforms = useDerivedValue(() => ({
    resolution: [width, height],
    progress: progress.value,
  }));

  const AnimatedCanvas = Animated.createAnimatedComponent(Canvas);

  const rCanvasStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value > 0 ? 1 : 0,
      pointerEvents: progress.value > 0 ? 'auto' : 'none',
    }
  });

  return (
    <TransitionsContext.Provider value={{
      prepareTransition, runTransition
    }}>
      <AnimatedCanvas style={[{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        opacity: 0.5,
      }, rCanvasStyle]}>
        <Fill>
          <Shader source={shader} uniforms={uniforms}>
            <ImageShader height={height} width={width} image={secondImage} fit={'cover'}/>
            <ImageShader height={height} width={width} image={firstImage} fit={'cover'}/>
          </Shader>
        </Fill>
      </AnimatedCanvas>
      <View ref={viewRef} style={{ flex: 1}}>
        {children}
      </View>
    </TransitionsContext.Provider>
    );
};

export const useTransition = () => {
  return useContext(TransitionsContext);
}

export default TransitionsProvider;
function userRef<T>(arg0: null) {
  throw new Error("Function not implemented.");
}

