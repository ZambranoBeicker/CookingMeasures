import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type State = {
  name: string;
  id: number;
};

type AppState = {
  tasks: State[];
};

const initialState: AppState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks = [
        ...state.tasks,
        {
          name: action.payload,
          id: state.tasks.length,
        },
      ];
    },
  },
});

export const {addTask} = tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasks;
