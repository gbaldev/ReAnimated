import { Slot } from 'expo-router';
import TransitionsProvider from './providers/transitionsProvider';

export default function Layout() {
  return (
    <TransitionsProvider>
      <Slot />
    </TransitionsProvider>
  );
}