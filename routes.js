import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
const routes = [];

const Router = () => {
  const screens = useMemo(routes => (
    routes.map(({ component, name, title }) => (
      <Screen name={name} component={component} options={{ title }}/>)
    )
  ), [routes]);

  return (
    <Navigator>
      {screens}
    </Navigator>
  );
};

export default Router;
