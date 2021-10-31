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
import {useState} from 'react';
import {Text, View} from 'react-native';
import TimerSection from './src/components/TimerSection';

const App = () => {
  const [time, setTime] = useState(0);
  return (
    <View>
      <TimerSection time={time} />
    </View>
  );
};

export default App;
