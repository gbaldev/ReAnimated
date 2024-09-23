import React from 'react';
import { Redirect } from 'expo-router';

export default function Page() {
  return <Redirect href={'/navigatorShader/(stack)/home'} />;
}
