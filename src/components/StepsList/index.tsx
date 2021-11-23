import * as React from 'react';
import {Text, View} from 'react-native/';
import * as styles from './styles';
import DefaultMessage from './DefaultMessage';

interface list {
  name: string;
}

type StepListProps = {
  list: list[];
};

export default function StepList({list}: StepListProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your steps list</Text>
      <View style={styles.listContainer}>
        {list.length === 0 ? (
          <DefaultMessage />
        ) : (
          list.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <View style={styles.listItem}>
                  <Text style={styles.itemText}>{item.name || 'No name'}</Text>
                  <Text style={styles.itemText}>20 sec</Text>
                </View>
              </React.Fragment>
            );
          })
        )}
      </View>
    </View>
  );
}
