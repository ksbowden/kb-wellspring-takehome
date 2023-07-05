import { Appointment } from './appointment';
import { Patient } from './patient';
import { View } from './view';

export function appReducer(state: AppState, action: AppAction) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.UpdateView:
      return {
        ...state,
        view: payload.view,
      };
    case ActionType.AddAllData:
      return {
        ...state,
        patients: payload.patients,
        appointments: payload.appointments,
      };
  }
}

export interface AppState {
  view: View;
  patients: Patient[];
  appointments: Appointment[];
}

export enum ActionType {
  UpdateView = 'update-view',
  AddAllData = 'add-all-data',
}

export interface AppAction {
  type: ActionType;
  payload: Record<string, any>;
}

export const initialState = {
  view: View.Home,
  patients: [],
  appointments: [],
};
