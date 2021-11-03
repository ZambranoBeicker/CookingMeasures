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
import {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import TimerSection from './src/components/TimerSection';
import AddButton from './src/components/AddButton';
import StepsList from './src/components/StepsList';
import CreateStepModal from './src/components/CreateStepModal';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

const App = () => {
  const [time, setTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stepList, setStepList] = useState([{name: ''}]);

  const Stack = createNativeStackNavigator();

  function HomeScreen() {
    return (
      <View style={{flex: 1}}>
        <View style={homeStyles}>
          <TimerSection time={time} />
        </View>
        <StepsList list={stepList} />
        {isModalOpen && (
          <CreateStepModal
            setName={name => setStepList([...stepList, {name}])}
            setClose={() => setIsModalOpen(false)}
          />
        )}
        <AddButton setClicked={setIsModalOpen} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
