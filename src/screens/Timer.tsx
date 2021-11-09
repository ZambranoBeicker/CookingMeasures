import * as React from 'react';
import {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import TimerSection from '../components/TimerSection';
import StepsList from '../components/StepsList';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

export default function Timer() {
  const [time, setTime] = useState(0);
  return (
    <View style={{flex: 1}}>
      <View style={homeStyles}>
        <TimerSection time={time} />
        <StepsList list={[{name: ''}]} />
      </View>
    </View>
  );
}
