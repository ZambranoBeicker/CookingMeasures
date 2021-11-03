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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import Default from './src/layout/Default';
import Timer from './src/screens/Timer';
import Home from './src/screens/Home';

const App = () => {
  const Stack = createNativeStackNavigator();

  const screens: {[name: string]: () => JSX.Element} = {
    Home: () => (
      <Default>
        <Home />
      </Default>
    ),
    Timer: () => (
      <Default>
        <Home />
      </Default>
    ),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={screens.Home} />
        <Stack.Screen name="Timer" component={screens.Timer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
