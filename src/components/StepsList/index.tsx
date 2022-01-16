import * as React from 'react';
import {Text, View} from 'react-native/';
import * as styles from './styles';
import {isArrayEmpty} from '../../services';
import {TaskSchema} from '../../interfaces';
import TasksView, {DefaultMessage, TasksIterator} from '../TasksView';

type StepListProps = {
  list: TaskSchema[];
  measureId?: number;
};

export default function StepList({
  list,
  measureId,
}: StepListProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your steps list</Text>
      <TasksView areTasksEmpty={isArrayEmpty(list)}>
        <DefaultMessage />
        <TasksIterator list={list} measureId={measureId} />
      </TasksView>
    </View>
  );
}
