import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import TimerSection from '../components/TimerSection';
import StepsList from '../components/StepsList';
import TimerButtons from '../components/TimerButtons';
import {tasksSelector} from '../reducers/tasksSlice';
import {useSelector} from 'react-redux';

const homeStyles: ViewStyle = {
  paddingHorizontal: 20,
  paddingVertical: 4,
};

type TimerStateType = 'inital' | 'paused' | 'finished' | 'start';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timerState, setTimerState] = useState<TimerStateType>('inital');
  const [measuring, setMeasuring] = useState(0);

  const {tasks} = useSelector(tasksSelector);

  const tasksContainerStyles: ViewStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '86%',
  };

  const handleFinish = (): void => {
    if (measuring + 1 <= tasks.length) {
      setMeasuring(measuring + 1);
    }

    if (measuring + 1 === tasks.length) {
      setTime(0);
      setMeasuring(0);
    }

    setTimerState('finished');
  };
  const handleStart = (): void => {
    setTimerState('start');
  };

  useEffect(() => {
    if (timerState === 'start') {
      const timeoutId = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  });

  useEffect(() => {
    console.log('this is measuring: ', measuring);
    console.log('this is time: ', time);
  }, [measuring]);

  return (
    <View style={{flex: 1}}>
      <View style={homeStyles}>
        <TimerSection time={time} />
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View style={tasksContainerStyles}>
            <StepsList measureId={measuring} list={tasks} />
            <TimerButtons
              setPause={() => setTimerState('paused')}
              setStart={() => handleStart(timerState)}
              setFinish={() => handleFinish(timerState)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
