import { createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';
import { Program } from '../types/ProgramsFree';
import { LOADING_STATUSES } from '../data/constants';

export type State = typeof initialState;

const initialState = {
  data: [] as Program[],
  status: LOADING_STATUSES.EMPTY,
  error: '',
};

const reducer = createReducer(initialState, {
  [actions.getProgramsFreeRequest.type]: () => ({
    ...initialState,
    status: LOADING_STATUSES.LOADING,
  }),
  [actions.getProgramsFreeSuccess.type]: (
    state,
    { payload }: ReturnType<typeof actions.getProgramsFreeSuccess>
  ) => ({
    ...state,
    status: LOADING_STATUSES.SUCCESS,
    data: payload.data,
  }),
  [actions.getProgramsFreeFailure.type]: (
    state,
    { payload }: ReturnType<typeof actions.getProgramsFreeFailure>
  ) => ({
    ...state,
    status: LOADING_STATUSES.FAILURE,
    error: payload,
  }),
});

export default reducer;
