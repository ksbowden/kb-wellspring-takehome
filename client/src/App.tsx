import { useReducer } from 'react';
import { Flex } from '@chakra-ui/react';

import SideNav from './components/side-nav';
import MainContent from './components/main-content';

import { appReducer, initialState } from './state/app-reducer';
import { AppContext, DispatchContext } from './state/app-context';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <>
      <AppContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Flex height="100vh" textColor="#687083">
            <SideNav />
            <MainContent />
          </Flex>
        </DispatchContext.Provider>
      </AppContext.Provider>
    </>
  );
}

export default App;
