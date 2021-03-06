import * as React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import StepsList from '../components/StepsList';
import CreateStepModal from '../components/CreateStepModal';
import AddButton from '../components/AddButton';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, tasksSelector} from '../reducers/tasksSlice';

export default function Home(): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const state = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const handleTaskCreation: (name: string) => void = (name: string) => {
    dispatch(addTask(name));
  };

  return (
    <View style={{flex: 1}}>
      <StepsList list={state.tasks} />
      {isModalOpen && (
        <CreateStepModal
          setName={handleTaskCreation}
          setClose={() => setIsModalOpen(false)}
        />
      )}
      {!isModalOpen && <AddButton setClicked={setIsModalOpen} />}
    </View>
  );
}
