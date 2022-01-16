import * as React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {TaskSchema} from '../../interfaces';
import * as styles from './styles';

interface IteratorProps {
  list: TaskSchema[];
  measureId?: number;
}

export default function TasksIterator({
  list,
  measureId,
}: IteratorProps): JSX.Element {
  return (
    <>
      {list.map((item, index) => {
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
      })}
    </>
  );
}
