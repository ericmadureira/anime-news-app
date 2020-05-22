import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();
const routes = [
  { name: 'Home', component: HomeScreen, title: 'Anime News' },
];

const Router = () => {
  const screens = useMemo(() => (
    routes.map(({ component, name, title }) =>
      <Screen
        component={component}
        key={name}
        name={name}
        options={{ title, headerTitleAlign: 'center' }}
      />
  )), [routes]);

  return (
    <Navigator initialRouteName='Home'>
      {screens}
    </Navigator>
  );
};

export default Router;
