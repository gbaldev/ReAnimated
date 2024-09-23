import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, loadAsync } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens } from './constants';
// @ts-ignore
import sfProRoundedBold from '../assets/fonts/SF-Pro-Rounded-Bold.otf';

SplashScreen.preventAutoHideAsync();

export default gestureHandlerRootHOC(function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await loadAsync({
        'SF-Pro-Rounded-Bold': sfProRoundedBold,
      })
      setFontsLoaded(true);
    })();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex:1}}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="info" options={{
            presentation: 'containedTransparentModal',
            animation: 'fade'
          }} />
          {screens.sort((a, b) => a.name.localeCompare(b.name)).map(({route}) => <Stack.Screen name={route as string} key={route as string} />)}
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
})
