import * as React from 'react';
import {ScrollView, View} from 'react-native';
import * as styles from './styles';
import DefaultMessage from './DefaultMessage';
import TasksIterator from './TasksIterator';

interface ContainerProps {
  areTasksEmpty: boolean;
  children: React.ReactChild[];
}

export default function TasksView({
  areTasksEmpty,
  children,
}: ContainerProps): JSX.Element {
  return (
    <ScrollView>
      <View style={styles.listContainer}>
        {areTasksEmpty ? children[0] : children[1]}
      </View>
    </ScrollView>
  );
}

export {DefaultMessage, TasksIterator};
