import * as React from 'react';
import {useState} from 'react';
import {View, ViewStyle} from 'react-native';
import TimerSection from '../components/TimerSection';
import StepsList from '../components/StepsList';
import TimerButtons from '../components/TimerButtons';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

export default function Timer() {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [start, setStart] = useState(false);
  const [finish, setFinish] = useState(false);

  const tasksContainerStyles: ViewStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '86%',
  };
  return (
    <View style={{flex: 1}}>
      <View style={homeStyles}>
        <TimerSection time={time} />
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View style={tasksContainerStyles}>
            <StepsList list={[{name: ''}]} />
            <TimerButtons
              setPause={() => setPause(!pause)}
              setStart={() => setStart(!start)}
              setFinish={() => setFinish(!finish)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
