import { frag } from './shaderLib';

export type Transition = string;

// You can find it in the RN Skia
// Integrate the transition into skia code.
// examples repo: https://raw.githubusercontent.com/Shopify/react-native-skia/main/example/src/Examples/Transitions/transitions/Base.ts
export const transition = (openGLTransition: Transition) => {
  return frag`
  uniform shader image1;
  uniform shader image2;

  uniform float progress;
  uniform float2 resolution;
  
  half4 getFromColor(float2 uv) {
    return image1.eval(uv * resolution);
  }
  
  half4 getToColor(float2 uv) {
    return image2.eval(uv * resolution);
  }
  
  ${openGLTransition}

  half4 main(vec2 xy) {
    vec2 uv = xy / resolution;
    return transition(uv);
  }
  `;
};
