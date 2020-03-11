import { State } from './reducers';

export const selectProgramsList = (state: State) => state.data;
export const selectProgramsStatus = (state: State) => state.status;
export const selectProgramsError = (state: State) => state.error;
