import * as React from 'react';
import {useState} from 'react';
import {TextInput, Pressable, Text, View} from 'react-native/';
import * as styles from './styles';

type CreateStepModalProps = {
  setClose: () => void;
  setName: (name: string) => void;
};

export default function CreateStepModal({
  setClose,
  setName,
}: CreateStepModalProps): JSX.Element {
  const [stepName, setStepName] = useState('');
  return (
    <View style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>New Step</Text>
        <View>
          <Text style={styles.label}>Name of your step</Text>
          <TextInput
            onChangeText={text => setStepName(text)}
            style={styles.input}
            placeholder="Buy the food..."
          />
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => {
                setClose();
              }}
              style={{...styles.button, backgroundColor: '#ca2500'}}>
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setClose();
              }}
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
