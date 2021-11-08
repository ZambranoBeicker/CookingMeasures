import * as React from 'react';
import {View, Text} from 'react-native';
import * as styles from './styles';

type TimerSectionProps = {
  time: number;
};

export default function TimerSection({time}: TimerSectionProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Measure your time!</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{time} sec</Text>
      </View>
    </View>
  );
}
