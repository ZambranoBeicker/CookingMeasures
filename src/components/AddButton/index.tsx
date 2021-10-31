import * as React from 'react';
import {Pressable, Text, View} from 'react-native/';
import * as styles from './styles';

export default function AddButton(): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}
