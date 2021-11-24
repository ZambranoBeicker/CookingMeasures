import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {tasksSlice} from './reducers/tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
