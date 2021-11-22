import * as React from 'react';
import {Pressable, Text, View} from 'react-native/';
import * as styles from './styles';
import Button from '../Button';

type TimerButtonsProps = {
  setStart: () => void;
  setPause: () => void;
  setFinish: () => void;
};

export default function TimerButtons({
  setStart,
  setPause,
  setFinish,
}: TimerButtonsProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Button onPress={setPause} variant="secondary">
        Pause
      </Button>
      <Button onPress={setStart}>Start</Button>
      <Button onPress={setFinish} variant="secondary">
        Finish
      </Button>
    </View>
  );
}
