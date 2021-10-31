import * as React from 'react';
import {Text, View} from 'react-native/';
import * as styles from './styles';

export default function AddButton(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your steps list</Text>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text style={styles.itemText}>The first step</Text>
          <Text style={styles.itemText}>20s</Text>
        </View>
      </View>
    </View>
  );
}
