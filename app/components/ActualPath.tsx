import { Canvas, LinearGradient, Path, RoundedRect, Skia } from "@shopify/react-native-skia";
import React, { useMemo } from "react";

interface ActualPathProps {
  width: number,
  height: number,
};

const ActualPath: React.ComponentType<ActualPathProps> = ({ height, width }) => {
  const canvasPadding = 2.5;
  const skiaPath = useMemo(() => {
    const sp = Skia.Path.Make();
    sp.moveTo(canvasPadding * 2, 0);
    sp.lineTo(width - canvasPadding * 2, 0);
    sp.lineTo(width, height);
    sp.lineTo(0, height);
    sp.close();
    return sp
  }, []);
  return (
    <Canvas style={{ height, width: width, zIndex: 1 }}>
      <Path path={skiaPath}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: height }}
          colors={['white', 'transparent']}
        />
      </Path>
      <RoundedRect  x={0} y={0} height={7} width={width} color={'white'} r={20}/>
    </Canvas>
  );
}

export default ActualPath;