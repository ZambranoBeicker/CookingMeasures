import * as React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import StepsList from '../components/StepsList';
import CreateStepModal from '../components/CreateStepModal';
import AddButton from '../components/AddButton';

export default function Home(): JSX.Element {
  const [stepList, setStepList] = useState([{name: ''}]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={{flex: 1}}>
      <StepsList list={stepList} />
      {isModalOpen && (
        <CreateStepModal
          setName={name => setStepList([...stepList, {name}])}
          setClose={() => setIsModalOpen(false)}
        />
      )}
      {!isModalOpen && <AddButton setClicked={setIsModalOpen} />}
    </View>
  );
}
