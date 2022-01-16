import * as React from 'react';
import {Text, View} from 'react-native/';
import * as styles from './styles';

export default function DefaultMessage(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>There are no tasks</Text>
    </View>
  );
}
