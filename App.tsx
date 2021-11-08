/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Default from './src/layout/Default';
import Timer from './src/screens/Timer';
import Home from './src/screens/Home';
import VectorImage from 'react-native-vector-image';

const App = () => {
  const Tabs = createBottomTabNavigator();

  const screens: {[name: string]: () => JSX.Element} = {
    Home: () => (
      <Default>
        <Home />
      </Default>
    ),
    Timer: () => (
      <Default>
        <Timer />
      </Default>
    ),
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          options={{
            tabBarIcon: () => (
              <VectorImage
                source={require('./src/assets/home_icon.svg')}
                style={{marginTop: 10}}
              />
            ),
          }}
          name="Home"
          component={screens.Home}
        />
        <Tabs.Screen
          options={{
            tabBarIcon: () => (
              <VectorImage
                source={require('./src/assets/timer_icon.svg')}
                style={{marginTop: 12, height: 16, width: 16}}
              />
            ),
          }}
          name="Timer"
          component={screens.Timer}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
