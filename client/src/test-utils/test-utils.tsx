import React, { ReactElement, useReducer } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppContext, DispatchContext } from '../state/app-context';
import { appReducer, initialState } from '../state/app-reducer';

// eslint-disable-next-line react-refresh/only-export-components
const ContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: ContextWrapper, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };
