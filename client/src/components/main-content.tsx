import { useCallback, useContext } from 'react';
import { Box } from '@chakra-ui/react';

import Header from './header';
import Home from './home/home';
import { AppContext } from '../state/app-context';
import { View } from '../state/view';
import PatientsTable from './patients-table/patients-table';

function MainContent() {
  const { view } = useContext(AppContext);

  // This useCallback will prevent the Header component from re-rendering if this component re-renders.
  // Highly unlikely to happen as it stands today, but it's a good best-practice.
  const getTitle = useCallback(() => {
    switch (view) {
      case View.Patients:
        return 'All Patients';
      case View.Home:
      default:
        return 'Good Afternoon, Ken!';
    }
  }, [view]);

  // This useCallback does nothing today, but could help prevent perf issues in the future.
  const getContent = useCallback(() => {
    switch (view) {
      case View.Patients:
        return <PatientsTable />;
      case View.Home:
      default:
        return <Home />;
    }
  }, [view]);

  return (
    <Box backgroundColor="#FCFCFC" flexGrow="1" padding="64px">
      <Header title={getTitle()} />
      {getContent()}
    </Box>
  );
}

export default MainContent;
