import * as React from 'react';
import {Text, View, ScrollView, ViewStyle} from 'react-native/';
import * as styles from './styles';
import DefaultMessage from './DefaultMessage';
import {isArrayEmpty} from '../../services';

interface list {
  name: string;
  id: number;
}

type StepListProps = {
  list: list[];
  measureId?: number;
};

export default function StepList({
  list,
  measureId,
}: StepListProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your steps list</Text>
      <ScrollView>
        <View style={styles.listContainer}>
          {isArrayEmpty(list) ? (
            <DefaultMessage />
          ) : (
            list.map((item, index) => {
              const measureStyles: ViewStyle =
                measureId === item.id
                  ? {borderColor: 'black', borderWidth: 3, borderBottomWidth: 3}
                  : {};

              return (
                <React.Fragment key={index}>
                  <View style={{...styles.listItem, ...measureStyles}}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText}>20 sec</Text>
                  </View>
                </React.Fragment>
              );
            })
          )}
        </View>
      </ScrollView>
    </View>
  );
}
