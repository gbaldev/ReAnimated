import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack screenOptions={{ presentation: 'containedTransparentModal', animation: 'fade' }}>
      <Stack.Screen
        name="initial"
        options={{
          headerBlurEffect: 'dark',
          headerTitle: 'Home',
          headerTransparent: true,
          headerTitleStyle: {
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="detail"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default Layout;
