import {createSlice, CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type State = {name: string};

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
        },
      ];
    },
  },
});

export const {addTask} = tasksSlice.actions;
export const tasksSelector = (state: RootState) => state.tasks;
