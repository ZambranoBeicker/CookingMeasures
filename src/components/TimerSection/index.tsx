import * as React from 'react';
import {View, Text} from 'react-native';

type TimerSectionProps = {
  time: number;
};

export default function TimerSection({time}: TimerSectionProps): JSX.Element {
  return (
    <View>
      <Text>{time}</Text>
    </View>
  );
}
