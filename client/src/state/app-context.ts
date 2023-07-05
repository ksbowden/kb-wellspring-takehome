import { Dispatch, createContext } from 'react';
import { AppAction, AppState, initialState } from './app-reducer';

export const AppContext = createContext<AppState>(initialState);
export const DispatchContext = createContext<Dispatch<AppAction>>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {}
);
