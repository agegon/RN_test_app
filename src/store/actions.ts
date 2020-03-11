import { createAction } from '@reduxjs/toolkit';
import { ProgramsList } from 'src/types/ProgramsFree';

const moduleName = 'PROGRAMS_FREE';

export const getProgramsFreeRequest = createAction(`GET_${moduleName}_REQUEST`);

export const getProgramsFreeSuccess = createAction<ProgramsList>(
  `GET_${moduleName}_SUCCESS`
);

export const getProgramsFreeFailure = createAction<string>(
  `GET_${moduleName}_FAILURE`
);
