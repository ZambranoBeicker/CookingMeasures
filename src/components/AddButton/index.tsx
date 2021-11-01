import * as React from 'react';
import {Pressable, Text, View} from 'react-native/';
import * as styles from './styles';

type AddButtonProps = {
  setClicked: (newValue: boolean) => void;
};

export default function AddButton({setClicked}: AddButtonProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setClicked(true)} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
}
