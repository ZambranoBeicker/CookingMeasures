import * as React from 'react';
import {TextInput, Pressable, Text, View} from 'react-native/';
import * as styles from './styles';

export default function CreateStepModal(): JSX.Element {
  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>New Step</Text>
        <View>
          <Text style={styles.label}>Name of your step</Text>
          <TextInput style={styles.input} placeholder="Buy the food..." />
          <View style={styles.buttonContainer}>
            <Pressable style={{...styles.button, backgroundColor: '#ca2500'}}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.button,
                backgroundColor: 'lightblue',
              }}>
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
