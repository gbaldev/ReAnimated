import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import Slider from '@react-native-community/slider';
import { Canvas, Fill, ImageShader, Shader, useImage } from '@shopify/react-native-skia';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import { butterflyShader } from '../../constants';
import { transition } from '../helpers/transition';
import GoBack from '@/app/components/GoBack';
import styles, { canvasHeight, canvasWidth } from './styles';


const FIRST_IMAGE =
  'https://images.unsplash.com/photo-1596501048547-e9acb71ca798?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const SECOND_IMAGE =
  'https://images.unsplash.com/photo-1531168556467-80aace0d0144?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  
export default function imageShaderTransitions() {
  const firstImage = useImage(FIRST_IMAGE);
  const secondImage = useImage(SECOND_IMAGE);
  
  const butterflyShaderEffect = transition(butterflyShader);

  const progress = useSharedValue(0);

  const uniform = useDerivedValue(() => ({
    progress: progress.value,
    resolution: [canvasWidth, canvasHeight],
  }), [canvasHeight, canvasWidth]);

  const handleChange = useCallback((value: number) => {
    progress.value = value;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <GoBack />
      <Slider style={styles.slider} minimumTrackTintColor='white' onValueChange={handleChange}/>
      <Canvas style={styles.canvas}>
        <Fill>
          <Shader source={butterflyShaderEffect} uniforms={uniform}>
            <ImageShader width={canvasWidth} height={canvasHeight} image={firstImage} fit='cover' />
            <ImageShader width={canvasWidth} height={canvasHeight} image={secondImage} fit='cover' />
          </Shader>
        </Fill>
      </Canvas>
    </SafeAreaView>
  );
}

