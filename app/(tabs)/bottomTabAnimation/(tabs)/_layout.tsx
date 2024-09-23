
import BottomTab from '@/app/components/BottomTab';
import { tabsScreenNames } from '@/app/constants';
import { Tabs } from 'expo-router';

export default function Layout() {
  return <Tabs tabBar={props => {
    return <BottomTab />;
  }}>
    {Object.values(tabsScreenNames).map(screenName => {
      return <Tabs.Screen key={screenName} name={screenName} />;
    })}
  </Tabs>;
}
