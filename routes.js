import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
const routes = [
  { name: 'Home', component: HomeScreen, title: 'Anime News' },
];

const Router = () => {
  const screens = useMemo(routes => (
    routes.map(({ component, name, title }) => (
      <Screen name={name} component={component} options={{ title }}/>)
    )
  ), [routes]);

  return (
    <Navigator initialRouteName='Home'>
      {screens}
    </Navigator>
  );
};

export default Router;
