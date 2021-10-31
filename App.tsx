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
import {View, ViewStyle} from 'react-native';
import TimerSection from './src/components/TimerSection';
import AddButton from './src/components/AddButton';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

const App = () => {
  const [time, setTime] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View style={homeStyles}>
        <TimerSection time={time} />
      </View>
      <AddButton />
    </View>
  );
};

export default App;
