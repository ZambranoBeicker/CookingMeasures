import * as React from 'react';
import {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import TimerSection from '../components/TimerSection';
import AddButton from '../components/AddButton';
import StepsList from '../components/StepsList';
import CreateStepModal from '../components/CreateStepModal';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

export default function HomeScreen() {
  const [time, setTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stepList, setStepList] = useState([{name: ''}]);
  return (
    <View style={{flex: 1}}>
      <View style={homeStyles}>
        <TimerSection time={time} />
      </View>
      <StepsList list={stepList} />
      {isModalOpen && (
        <CreateStepModal
          setName={name => setStepList([...stepList, {name}])}
          setClose={() => setIsModalOpen(false)}
        />
      )}
      <AddButton setClicked={setIsModalOpen} />
    </View>
  );
}
